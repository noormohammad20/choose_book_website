import './Cart.css'
const Cart = ({ cart, chooseOneBook, chooseBook }) => {

    console.log(cart)
    const newBook = Math.floor(Math.random() * cart.length)


    return (
        <div className='cart'>
            <h1>Selected Book</h1>

            {
                chooseBook ? null :
                    cart.map(book => <h3 key={book.id}>{book.name}</h3>)
            }
            {
                chooseBook &&
                <h3>
                    {
                        cart[newBook]?.name
                    }
                </h3>
            }
            <div>
                <button onClick={() => chooseOneBook()}>Choose Only One Book</button>
                <button >Reset Cart</button>
            </div>
        </div>
    )
}

export default Cart