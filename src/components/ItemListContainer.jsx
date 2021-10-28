import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    const addItem = (qty,stock) => {
        const message = `Agregaste ${ qty } producto`;
        if(stock !==0) {
            (qty === 1) ? alert(message) : alert(message + `s`)
        }
    }
    const[users, setUsers] = useState([]);
    //fetch async await
    const getUsers = async() => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const dataUsers = data.json()

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
    )
}

export default ItemListContainer;