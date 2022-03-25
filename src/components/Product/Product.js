import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price: {price}</p>
            <p className='product-seller'>Manufacturer: {seller}</p>
            <p className='product-ratings'>Ratings: {ratings} star</p>
            <button onClick={ () => handleAddToCart(product)} className="btn-cart">
                Add to Cart
            </button>
        </div>
    );
};

export default Product;