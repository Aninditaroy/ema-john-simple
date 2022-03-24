import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total  + shipping + tax;
    return (
        <div className='cart'>
                <h4>Order summary</h4>
                <p>Selected items: {quantity}</p>
                <p>Total price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
                <button className='clear-cart'>
                    <p className='btn-text-1'>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
                <button className='review-order'>
                    <p className='btn-text-2'>Review Order</p>
                    <FontAwesomeIcon icon={faArrowRight}
                    />
                </button>
        </div>
    );
};

export default Cart;