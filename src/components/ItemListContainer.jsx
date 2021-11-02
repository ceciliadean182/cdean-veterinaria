import { useEffect, useState } from "react";
import getFetch from "../services/getFetch";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    const[product, setProduct] = useState([]);

    useEffect(() => {
        getFetch
            .then( res => {
                setProduct(res)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(product)
    return(
        <div className="container">
            <ItemList product={product} />
        </div>
    )

    /*const addItem = (qty,stock) => {
        const message = `Agregaste ${ qty } producto`;
        if(stock !==0) {
            (qty === 1) ? alert(message) : alert(message + `s`)
        }
    
    }*/
}

export default ItemListContainer;