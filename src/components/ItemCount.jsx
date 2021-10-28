import { useState } from "react";
import { Button } from 'react-bootstrap';
import "../styles/styles.css"

const ItemCount = ({initial, stock, onAdd}) => {
    
    //número máximo = stock --> valor indicador para saber hasta cuándo sumar
    //número mínimo (1) --> valor indicador para saber hasta cuándo restar
    const[qty, setQty] = useState(initial)
    const onIncrease = () => { //botón que agrega
        const newValue = qty+1;
        if(newValue <= stock) {
            setQty(newValue)
        }
    }
    
    const onDecrease = () => { //botón que resta
        const newValue = qty -1
        if(initial <= newValue) {
            setQty(newValue)
        }
    }

    
    return (
        <>
            <div className="countCarrito">
                <Button onClick={ onDecrease }> - </Button>
                <div>{ qty }</div>
                <Button onClick={ onIncrease }> + </Button>
            </div>
            <div className="countCarrito">
                <Button onClick={() => onAdd(qty) }> Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount