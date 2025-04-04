const fs = require('fs')
const FormData = require('form-data');
const Client = require("./axios");


//
class Cloudflare extends Client{

    static instance;

    constructor() {
        super();
    }
    static getInstance() {
        if (!Cloudflare.instance) {
            Cloudflare.instance = new Cloudflare();
        }
        return Cloudflare.instance;
    }

    async uploadImages(path){
        const file = fs.createReadStream(path); 
        const formData = new FormData();
        formData.append('file', file);
        const result =  await this.client.post('/accounts/fce33b81c160d8b250a03d21653d8266/images/v1', formData)
        fs.unlinkSync(path);
        return result;
    }

    deleteImage(imageId) {
        return this.client.delete(`/accounts/fce33b81c160d8b250a03d21653d8266/images/v1/${imageId}`);
    }

    async getImages() {
        const result = await this.client.get('/accounts/fce33b81c160d8b250a03d21653d8266/images/v1');
        return result.data.result;
    }
}



module.exports = Cloudflare;
