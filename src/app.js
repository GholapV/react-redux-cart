import React from 'react'
import './app.css'
import Navbar from './Components/navbar'
import CartPanel from './Components/cartpanel'
import { createStore } from 'redux'
import { initialState, Reducer } from './reducer'
import { Provider } from 'react-redux'

const store = createStore(Reducer, initialState)

function App() {
    return (
        <Provider store={store}>
            <Navbar />
            <CartPanel />
        </Provider>
    )
}
export default App
