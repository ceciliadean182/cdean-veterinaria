import getFetch from "../services/getFetch"
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const[detail, setDetails] = useState([]);
    const { productoId } = useParams();

    useEffect(() => {
        getFetch
        .then(res => {        
            setDetails(res.find(prod => prod.id === productoId))
        })
        .catch(err => console.log(err))
    }, [productoId])
    return(
        <div>
            <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer