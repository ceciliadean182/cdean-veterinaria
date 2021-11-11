import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    function addToCart(items) {
        setCartList([
            ...cartList,
            items
        ])
    }
    const mostrarListado =() => {
        
    }
    return (
        <CartContext.Provider value={{cartList, mostrarListado, addToCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;