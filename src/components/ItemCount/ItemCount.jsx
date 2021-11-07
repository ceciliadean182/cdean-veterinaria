import { useState } from "react";
import { Button } from 'react-bootstrap';

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
                <Button className="addCart" onClick={ onDecrease }> - </Button>
                <span className="divQty">{ qty }</span>
                <Button  className="addCart" onClick={ onIncrease }> + </Button>
                <Button className="addCart" onClick={() => onAdd(qty) }> Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount