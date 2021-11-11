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
    const total = () => {
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price), 0)
    }
    const mostrarListado =(itemAdded) => {
        const findItem = cartList.find(itemCart => itemCart.product.id === itemAdded.product.id)
        if(findItem) {
            findItem.count = findItem.count + itemAdded.count
            setCartList(cartList)
        }
        
    }
    const removeItem = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }
    const removeCart = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{cartList, mostrarListado, addToCart, total, removeItem, removeCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;