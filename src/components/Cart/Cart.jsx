import { useCartContext } from "../../context/CartContext";
import  { Button } from 'react-bootstrap';
import '../ItemDetail/ItemDetail.css';

const Cart = () => {
    const{cartList, total, removeCart, removeItem} = useCartContext();

    return(
        <div className='container'>
            <h1>Carrito</h1>
            {cartList.map(prod => <li>{`Producto: ${prod.title} Unidades: ${prod.cantidad} Precio por unidad: ${prod.price}`}</li>)}
            {`Importe TOTAL: ${total()}`}
            <Button className="addCart">Pagar</Button>
            <Button className="addCart" onClick={()=>removeCart()}>Eliminar compra</Button>
        </div>
    )
}

export default Cart;