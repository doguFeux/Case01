import { alertConstants,productConstants } from '../_constants';
import { getProducts,getProductBySearchFilter } from '../_services'

export const getProductsAction = () => {
    return async dispatch => {

       dispatch({ type: productConstants.GET_PRODUCT_REQUEST});
        try {
            const products =  await getProducts();
            debugger;
            dispatch({ type: productConstants.GET_PRODUCT_SUCCESS,products})

        } catch (error) {
            dispatch({ type: productConstants.GET_PRODUCT_FAILURE,error})
        }
    }
}

export const getProductsFilterBySearchAction = (search) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_FILTER_REQUEST,search});

    }
}