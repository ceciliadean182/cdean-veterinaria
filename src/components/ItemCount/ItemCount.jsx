import { useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ItemCount = ({initial, stock, onAdd}) => {
    
    //número máximo = stock --> valor indicador para saber hasta cuándo sumar
    //número mínimo (1) --> valor indicador para saber hasta cuándo restar
    const[count, setCount] = useState(initial)
    const[cambiarBoton, setCambiarBoton] = useState(false)
    const onIncrease = () => { //botón que agrega
        if(count < stock) {
        setCount(count + 1)
        } else {
            alert("La cantidad no puede superar el stock")
        }
    }
    
    const onDecrease = () => { //botón que resta
        if(count > initial) {
            setCount(count - 1)
        }else {
            alert("La cantidad a comprar no puede ser menor a 1")
        }
    }

    const handlerOnAdd = () => {
        onAdd(count)
        setCount(initial)
        setCambiarBoton(true)
    }
    return (
        <>
            <div className="countCarrito">
                <Button className="addCart" onClick={ onDecrease }> - </Button>
                <span className="divQty">{ count }</span>
                <Button  className="addCart" onClick={ onIncrease }> + </Button>
                { cambiarBoton ?
                <Link to='/cart'>
                    <Button className="addCart">Finalizar Compra</Button> 
                </Link>
                :  
                <Button  className="addCart" onClick={ handlerOnAdd }> Agregar al carrito </Button>
                }

                
                {/* <Button className="addCart" onClick={() => onAdd(qty) }> Agregar al carrito</Button> */}
            </div>
        </>
    )
}

export default ItemCount