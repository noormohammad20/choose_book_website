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

    const addToCart = (selectedBook) => {
        const exists = cart.find(book => book.id === selectedBook.id)
        if (exists) {
            alert('You Already Have This Book On Your Cart !!')
        }
        else {
            const newBook = [...cart, selectedBook]
            setCart(newBook)
            if (chooseBook) {
                setChooseBook(false)
                setCart([])
            }
        }
    }

    const chooseOneBook = () => {
        let newArr = []
        const random = Math.floor(Math.random() * cart.length)
        newArr.push(cart[random])
        setCart(newArr)
    }
    const resetCart = () => {
        setCart([])
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
                    chooseOneBook={chooseOneBook}
                    chooseBook={chooseBook}
                    resetCart={resetCart}
                ></Cart>
            </div>
        </div>
    )
}

export default Site