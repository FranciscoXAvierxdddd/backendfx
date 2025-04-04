const axios = require('axios');

class Client {
    client;

    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.cloudflare.com/client/v4',
            headers: {
                'Authorization': 'Bearer S04MnbebnKYKLbwhCEbDFcR5KHkpa15q42onOkiZ'
            }
            
        })
    }
  
    
}
module.exports = Client;
