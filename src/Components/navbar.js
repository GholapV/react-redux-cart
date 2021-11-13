import React from 'react'
import { connect } from 'react-redux'

function Navbar({ cartvalue }) {
    return (
        <nav>
            <div className="nav-bar">
                <h3>React-Redux</h3>

                <div className="cart-icon">
                    <i className="fas fa-shopping-cart" />
                    <div className="cart-value">
                        <p className='amount'>{cartvalue}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapPropstoState = (state) => {
    return { cartvalue: state.cartvalue }
}

export default connect(mapPropstoState)(Navbar)
