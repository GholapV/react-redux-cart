import React from 'react'
import { connect } from 'react-redux'

function CartItems({ id, title, price, img, amount, remove, increase, decrease }) {
    return (
        <div className='item-outer'>

            <img src={img} alt='phone' />

            <div className="item-right">
                <div className="item-details">
                    <p>{title}</p>
                    <p style={{ color: 'dimgrey' }}>₹{price}</p>
                    <div className='item-remove-button' onClick={remove}>
                        remove
                    </div>
                </div>

                <div className="trigger">
                    <i className="fas fa-angle-up" onClick={() => {
                        increase()
                    }} />
                    <p>{amount}</p>
                    <i className="fas fa-angle-down" onClick={() => {
                        decrease()
                        amount === 1 && remove()
                    }} />
                </div>
            </div>
        </div>
    )
}

const mapDispatchtoState = (dispatch, props) => {
    let remove = () => dispatch({ type: 'REMOVE', payload: props.id })
    let increase = () => dispatch({ type: 'INCREASE_QUANT', payload: props.id })
    let decrease = () => dispatch({ type: 'DECREASE_QUANT', payload: props.id })
    return { remove, increase, decrease }
}

export default connect(null, mapDispatchtoState)(CartItems)
