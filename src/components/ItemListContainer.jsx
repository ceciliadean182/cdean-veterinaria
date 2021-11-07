import { useEffect, useState } from "react";
import getFetch from "../services/getFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router";

const ItemListContainer = () => {
    const[product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            getFetch
            .then( res => {
                setProduct(res.filter(prod => prod.tipo === id ))
            })
            .catch(err => console.log(err))

        }else {
            getFetch
            .then( res => {
                setProduct(res)
            })
            .catch(err => console.log(err))

        }
        
    }, [id])
    console.log(product)
    return(
        <div className="container">
            <ItemList product={product} />
        </div>
    )

    // const addItem = (qty,stock) => {
    //     const message = `Agregaste ${ qty } producto`;
    //     if(stock !==0) {
    //         (qty === 1) ? alert(message) : alert(message + `s`)
    //     }
    
    // }
}

export default ItemListContainer;