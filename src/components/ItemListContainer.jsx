import { useEffect, useState } from "react";
import getFetch from "../services/getFetch";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const[product, setProduct] = useState([]);
    //const[loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then( res => {
                setProduct(res)
            })
            .catch(err => console.log(err))
            //.finally(()=> setLoading(false))
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
    }
    const[users, setUsers] = useState([]);
    //fetch async await
    const getUsers = async() => {
        const data = await fetch('')
        const dataUsers = await data.json()
        setUsers(dataUsers)

    }
    useEffect(() => {
        setTimeout(() => getUsers(), 2000)
    }, [])
    return (
        <>
            <h2>{greeting}</h2>
            <ItemCount initial={ 1 } stock={ 10 } onAdd={ addItem }/>
            <ItemList users = { users } />


        </>
    )*/
}

export default ItemListContainer;