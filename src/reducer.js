import cartAdded from './items_added'

export const initialState = {
    cart: cartAdded,
    cartvalue: 0,
    total: 0
}

export function Reducer(state, action) {

    if (action.type === 'INCREASE_QUANT') {

        let newcart = state.cart.map(item => {
            if (item.id === action.payload) {
                item.amount += 1

            }
            return item;
        })
        return { ...state, cart: newcart }
    }

    if (action.type === 'DECREASE_QUANT') {

        let newcart = state.cart.map(item => {
            if (item.id === action.payload) {
                item.amount -= 1
            }
            return item;
        })
        return { ...state, cart: newcart }
    }

    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    if (action.type === 'REMOVE') {
        let filteredCart = state.cart.filter(item => item.id !== action.payload)
        return { ...state, cart: filteredCart }
    }

    if (action.type === 'SET_CARTVALUE_&_TOTAL') {

        let { cartvalue, total } = state.cart.reduce((cartdetails, item) => {
            const { price, amount } = item
            cartdetails.total += price * amount;
            cartdetails.cartvalue += amount
            return cartdetails
        }, {
            cartvalue: 0,
            total: 0
        })
        total.toFixed(2)
        return { ...state, cartvalue, total }
    }
    return state;
}
