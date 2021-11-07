import { Link } from 'react-router-dom';

const Item = ({prod}) => {

    return(
        <div className="card mt-5">
                                        <div className="card-header">
                                            {prod.title}    
                                        </div>
                                        <div className="card-body">
                                            <img src={prod.imageUrl} alt="" />
                                            <p>Precio: ${prod.price}</p>
                                        </div>
                                        <div className="card-footer">
                                        <Link to={`/producto/${prod.id}`}>
                    <button className="btn btn-outline-primary btn-block">
                        Ver detalles
                    </button>
                </Link>

                                        </div>    
        </div>

    )
}

export default Item;