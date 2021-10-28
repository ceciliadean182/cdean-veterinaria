import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    const addItem = (qty,stock) => {
        const message = `Agregaste ${ qty } producto`;
        if(stock !==0) {
            (qty === 1) ? alert(message) : alert(message + `s`)
        }
    }
    return (
        <>
            <h2>{greeting}</h2>
            <ItemCount initial={ 1 } stock={ 10 } onAdd={ addItem }/>
        </>
    )
}

export default ItemListContainer;