import getFetchDetail from "../services/getFetchDetail"
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";


const ItemDetailContainer = () => {
    const[detail, setDetail] = useState([]);

    useEffect(() => {
        getFetchDetail
        .then(res => {        
            setDetail(res)
        })
        .catch(err => console.log(err))
    }, [])
    return(
        <div className="container">
            <ItemDetail detail={detail} />
        </div>
    )
}

export default ItemDetailContainer