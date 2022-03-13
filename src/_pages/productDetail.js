
import React, { useState,useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';




export default function ProductDetail(props) {

    const productState = useSelector(state => state.productsReducer)
    const dispatch = useDispatch()
    let { id } = useParams()

    const product = productState.products.filter((item) => {
        return item.id == id;
    })[0];

    debugger;

    return (
        <>
            <section className="comp-section-02">
                <div className="c-wrapper">
                    <div className="c-column-01">
                        <img src={product.image.src} />
                    </div>
                    <div className="c-column-02">
                        <div className="c-item-01">Product Name: {product.title}</div>
                        <div className="c-item-02">Price:  {product.variants[0].price}</div>
                    </div>
                </div>
            </section>
        </>
    );
}

