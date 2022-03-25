import React from 'react'
import './Cart.css'
const Cart = ({ cart }) => {
    console.log(cart)


    return (
        <div>
            <h2>Selected Book</h2>
            {
                cart.map(book => <h3 key={book.id}>{book.name}</h3>)
            }

        </div>
    )
}

export default Cart