import ProductItem from "./ProductItem";
import './ProductList.css'
import React from "react";
import { useState } from "react";


function ProductList({ products }) {

    const [selectedCategory, setSelectedCategory] = useState('All');

    // function to handle the change based on the selected category
    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    // filter the products based on the selected category
    const filterProducts = products.filter((value) => {
        if (selectedCategory === 'All') {
            return true;
        } else return value.category === selectedCategory

    })


    return (
        <div >
            <div className="filter-container">
                <select name="filter" onChange={handleCategoryChange}>
                    // categories for drop down list
                    <option value='All'>All</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Thriller">Thriller</option>  
                </select>
            </div>
            <hr />
            <div className="product-container">
                {filterProducts.map(product => (
                    <ProductItem key={product.id} product={product} />

                ))}
            </div>
        </div>

    )
}

export default ProductList;