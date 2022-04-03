import React from 'react';

const ReviewItem = ({product}) => {
    const {name, price, shipping, quantity} = product;
    return (
        <div>
            <h3>This is review item name: {name}</h3>
        </div>
    );
};

export default ReviewItem;