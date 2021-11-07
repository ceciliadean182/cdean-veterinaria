
import Item from "../Item/Item"

const ItemList = ( {product} ) => {
    // se mapea info
    // El map genera los item (enviándole las props)
    return (
        product.map(prod=> <Item key={prod.id} prod={prod} />)
    
    

       
    )
}

export default ItemList;