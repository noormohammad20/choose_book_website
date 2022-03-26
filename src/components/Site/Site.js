import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'
import Cart from '../Cart/Cart'

import './Site.css'
const Site = () => {
    const [chooseBook, setChooseBook] = useState(false)
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
        if (chooseBook) {
            setChooseBook(false)
            setCart([])
        }


    }
    const ChooseOneBook = () => {

        setChooseBook(true)
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
                <Cart cart={cart}
                    chooseOneBook={ChooseOneBook}
                    chooseBook={chooseBook}
                ></Cart>
            </div>
        </div>
    )
}

export default Site