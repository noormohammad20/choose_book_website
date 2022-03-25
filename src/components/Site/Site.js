import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'
import Cart from '../Cart/Cart'

import './Site.css'
const Site = () => {
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    const addToCart = (book) => {
        const newBook = [...cart, book]
        setCart(newBook)
    }
    return (
        <div className='site-container'>
            <div className="books-container">
                {
                    books.map(book => <Book
                        key={book.id}
                        book={book}
                        addToCart={addToCart}
                    ></Book>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Site