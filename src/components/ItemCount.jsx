import { useState } from "react";
import { Button } from 'react-bootstrap';
import "../styles/styles.css"

const ItemCount = ({initial, stock, text}) => {
    
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

    const onAdd = () => {
        const message = `Agregaste ${ qty } producto`;
        if(stock !==0) {
            (qty === 1) ? alert(message) : alert(message + `s`)
        }
    }
    return (
        <>
            <h4>{ text }</h4>
            <div className="countCarrito">
                
                <Button onClick={ onDecrease }> - </Button>
                { qty }
                <Button onClick={ onIncrease }> + </Button>
                <div>
                <Button onClick={ onAdd }> Agregar al carrito</Button>
                </div>
            </div>
        </>
    )
}

export default ItemCount