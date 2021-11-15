import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../../context/CartContext';
import { Badge } from 'react-bootstrap';


const CartWidget = ({cant}) => {
    const { calcularCantidad } = useCartContext();
    if (calcularCantidad() !== 0) {
        return(
            <>
            <FaShoppingCart className="cart" />
                <Badge className="cartBadge" bg="dark">{calcularCantidad()}</Badge>
            </>     
        )
    }return <></> 
    
}

export default CartWidget;