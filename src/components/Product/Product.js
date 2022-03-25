import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price: {price}</p>
            <p className='product-seller'>Manufacturer: {seller}</p>
            <p className='product-ratings'>Ratings: {ratings} star</p>
            <button onClick={ () => props.handleAddToCart(props.product)} className="btn-cart">
                Add to Cart
            </button>
        </div>
    );
};

export default Product;