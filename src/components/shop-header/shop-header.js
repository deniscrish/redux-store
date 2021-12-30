import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart
} from '../../actions';


const ShopHeader = ({ items, orderTotal }) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {items} items (${orderTotal})
                </div>
            </Link>
        </header>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
    return {
        items: cartItems.reduce((count, item) => count += item.count, 0),
        orderTotal: cartItems.reduce((sum, item) => sum += item.total, 0)
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader);
