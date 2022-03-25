import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'

import './Site.css'
const Site = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    const addToCart = (book) => {
        console.log(book)
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
                <h3>This is cart container

                </h3>
            </div>
        </div>
    )
}

export default Site