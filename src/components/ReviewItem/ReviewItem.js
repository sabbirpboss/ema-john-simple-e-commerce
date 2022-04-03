import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product}) => {
    const {name, img, price, shipping, quantity} = product;
    return (
        <div className='review-item'>
            <div className='cart-img'>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name">
                        {name}
                    </p>
                    <p className='cart-product-price'>Price: <span className="orange-color">&{price}</span></p>
                    <p className='shipping'><small>Shipping: {shipping}</small></p>
                    <p className='quantity'><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;