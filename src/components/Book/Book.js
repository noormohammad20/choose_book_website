import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Book.css'

const Book = ({ book, addToCart }) => {
    const { image, price, name } = book

    return (
        <div className='book'>

            <img src={image} alt="" />
            <h3>Name:{name}</h3>
            <h4>Price:{price}</h4>
            <button onClick={() => addToCart(book)} className="cart-btn">
                <p className='text'> Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>

    )
}

export default Book