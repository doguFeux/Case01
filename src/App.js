import React, { useState,useEffect } from 'react';
import SearchBar from "./_components/search-bar";
import ProductCart from "./_components/product-cart";
import { useSelector ,useDispatch} from 'react-redux'
import {getProductsFilterBySearchAction} from "./_actions";



export default function App() {


    const productState = useSelector(state => state.productsReducer)
    const dispatch = useDispatch()
    const dataLimit = 10;
    const pageLimit = 5;
    const [pages] = useState(Math.round( productState.products.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);


    const handleKeyDown = (ev) => {

            if (ev.key === 'Enter') {
                dispatch(getProductsFilterBySearchAction(ev.target.value))

        }
    }


    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return productState.products.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {

        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };


    return (
        <>
            <section className="comp-section-01">
                <div className="c-wrapper">
                    <div className="c-column-01">
                      <SearchBar onKeyDown={handleKeyDown}/>
                    </div>
                    <div className="c-column-02">
                        {

                            getPaginatedData().map((product, index) => (
                                        <ProductCart product={product} key={index}/>
                                ))
                        }

                    </div>
                    <div className="c-column-03">
                        <div className="pagination">
                            <button
                                onClick={goToPreviousPage}
                                className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                            >
                                prev
                            </button>
                            {getPaginationGroup().map((item, index) => (
                                <button
                                    key={index}
                                    onClick={changePage}
                                    className={`step ${currentPage === item ? 'active' : 'null'}`}
                                >
                                    <span>{item}</span>
                                </button>
                            ))}
                            <button
                                onClick={goToNextPage}
                                className={`next ${currentPage === pages ? 'disabled' : ''}`}
                            >
                                next
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}