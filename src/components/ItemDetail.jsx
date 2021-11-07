import {useState} from 'react'
import ItemCount from './ItemCount';


const ItemDetail = ({detail}) => {
    const [count, setCount] = useState(0)
    const onAdd =(cant)=>{
        setCount(cant)
    }
    console.log(count)

    return (
        <div className="card w-50 mt-5">
            <div className="card-header">
               {detail.title}    
            </div>
        <div className="card-body">
            <img src={detail.imageUrl} alt="" />
            <div>{detail.description}</div>
            <p>Stock:{detail.stock}</p>
            
        </div>
        <div className="card-footer">
            <p>Precio: ${detail.price}</p>
        </div> 
        <ItemCount initial={count} stock={detail.stock} onAdd={onAdd}/>
</div>
    )
}

export default ItemDetail