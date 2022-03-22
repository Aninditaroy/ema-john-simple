import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <h4>Order summary</h4>
                <p>Selected items: {cart.length}</p>
                <p>Total price: ${ }</p>
                <p>Total Shipping Charge: { }</p>
                <p>Tax: { }</p>
                <h4>Grand Total: { }</h4>
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
        </div>
    );
};
export default Shop;