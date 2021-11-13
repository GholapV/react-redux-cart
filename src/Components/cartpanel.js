import React, { useEffect } from 'react'
import CartItems from './cartitems'
import { connect } from 'react-redux'

function CartPanel({ cart = [], total, dispatch }) {

    useEffect(() => {
        console.log('useEffect');
        dispatch({ type: 'SET_CARTVALUE_&_TOTAL' })
    })

    return (
        <div className='broad-panel'>
            <section className='cart-panel'>
                <header className="cart-status-header">
                    <h2>your bag</h2>
                    {cart.length === 0 && <p>is currently empty</p>}
                </header>

                {cart.map(item => <CartItems {...item} key={item.id} />)}

                {cart.length !== 0 && <footer className='cart-footer'>
                    <div className="total">
                        <p>Total</p>
                        <p>{total}</p>
                    </div>
                    <button className='clear-cart-button' onClick={() => {
                        dispatch({ type: 'CLEAR_CART' })
                    }}>
                        Clear Cart
                    </button>
                </footer>}
            </section>
        </div>
    )
}

const mapStatetoProps = (state) => {
    const { cart, total } = state
    return { cart, total }
}

export default connect(mapStatetoProps)(CartPanel)
