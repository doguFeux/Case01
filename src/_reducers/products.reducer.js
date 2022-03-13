import {productConstants} from "../_constants";
import datas from '../data.json'

const initialState = {
    products:datas.products,
    loading:false,
    originalData :datas.products
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case productConstants.GET_PRODUCT_REQUEST:
            return state
        case productConstants.GET_PRODUCT_SUCCESS:
            return {
                products: action.products,
                loading: false,
            };
        case productConstants.GET_PRODUCT_FAILURE:
            return {
                error: action.error,
                loading: false,
            };
        case productConstants.GET_PRODUCT_FILTER_REQUEST:
            debugger;
            return {
                products: datas.products.filter((product) => {
                   return product.title.toLowerCase().includes(action.search.toLowerCase())
                }),
                loading: false,
            };

        default:
            return state
    }
}