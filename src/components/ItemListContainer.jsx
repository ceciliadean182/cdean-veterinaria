import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {

    return (
        <>
            <h2>{greeting}</h2>
            <ItemCount initial={ 1 } stock={ 10 } text = "Texto de la prop" />
        </>
    )
}

export default ItemListContainer;