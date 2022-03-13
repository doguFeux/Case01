import axios from 'axios'

export const client = axios.create({
    baseURL:'https://teknasyon.myshopify.com/admin/api/2022-01/products.json',
    withCredentials: false,
    headers:{
        'X-Shopify-Access-Token':'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',
    }

});
