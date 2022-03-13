import React, { useState } from 'react';
import {Link} from 'react-router-dom'

export default function ProductCart({ product }) {
    return (
        <>
            <Link to={`/product/${product.id}`}  className="product-cart-01">
                <div className="cart-img-container">
                   <img src={product.image.src} />
                </div>
                <div className="cart-title-container">
                    {product.title}
                </div>
                <div className="cart-price-container">
                    {product.variants[0].price}
                </div>
            </Link>
        </>
    );
}