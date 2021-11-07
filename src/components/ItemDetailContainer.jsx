import getFetchDetail from "../services/getFetchDetail"
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


const ItemDetailContainer = () => {
    const[detail, setDetail] = useState([]);
    const { productoId } = useParams();

    useEffect(() => {
        getFetchDetail
        .then(res => {        
            setDetail(res.find(prod => prod.id === productoId))
        })
        .catch(err => console.log(err))
    }, [productoId])
    return(
        <div className="container">
            {detail && <ItemDetail detail={detail} /> }
        </div>
    )
}

export default ItemDetailContainer