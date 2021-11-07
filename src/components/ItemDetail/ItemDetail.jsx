import {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


const ItemDetail = ({detail}) => {
    const [count, setCount] = useState(1)
    const onAdd =(cant)=>{
        setCount(cant)
    }
    console.log(count)

    return (
        <div className="cardDetail card w-50 mt-5 mb-5">
            <div className="card-header">
               <span className="cardTitle">{detail.title}</span>   
            </div>
            <div className="card-body">
                <img className="imgDetail mx-auto d-block" src={detail.imageUrl} alt="" />
            </div>
            <hr />
                <div className="card-body">
                <span className="cardTitle">{detail.description}</span>
                </div>
            
            <div className="card-footer">
                <p className="cardTitle">Stock: {detail.stock}</p>
                <p className="cardTitle">Precio: ${detail.price}</p>
                <ItemCount initial={count} stock={detail.stock} onAdd={onAdd}/>
            </div> 
        </div>  
    )
}

export default ItemDetail