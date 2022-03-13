import {client} from '../_helpers'

export const getProducts = async () => {
      return  await client.get("/");
}

export const getProductBySearchFilter = async (search) => {
    return await client.get(`/filter?=${search}`);
}