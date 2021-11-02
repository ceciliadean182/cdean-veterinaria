

const ItemDetail = ({detail}) => {
    
    return (
        <div className="card w-50 mt-5">
            <div className="card-header">
                {detail.title}    
            </div>
        <div className="card-body">
            <img src={detail.imageUrl} alt="" />
            <div>{detail.description}</div>
            <p>Stock:{detail.stock}</p>
            
        </div>
        <div className="card-footer">
            <p>Precio: ${detail.price}</p>
        </div>    
</div>
    )
}

export default ItemDetail