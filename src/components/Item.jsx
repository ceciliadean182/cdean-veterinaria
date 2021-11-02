

const Item = ({prod}) => {

    return(
        <div className="card w-50 mt-5">
                                        <div className="card-header">
                                            {prod.title}    
                                        </div>
                                        <div className="card-body">
                                            <img src={prod.imageUrl} alt="" />
                                            <p>Precio: ${prod.price}</p>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-outline-primary btn-block">
                                                Ver detalles
                                            </button>
                                        </div>    
        </div>
    )
}

export default Item;