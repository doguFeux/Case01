import React, { useState } from 'react';

export default function SearchBar({onKeyDown}) {

    const [count, setCount] = useState(0);

    return (
        <>
            <div className="search-bar-01">
                <input type="text" placeholder="Saerch..."  onKeyDown={onKeyDown} className="search-input"/>
                <span>
                    <img src={require('../assets/img/MagnifyingGlass.png')} />
                </span>
            </div>
        </>
    );
}