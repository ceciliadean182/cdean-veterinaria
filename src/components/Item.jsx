import { Nav } from 'react-bootstrap';

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
                                            <Nav.Link to={`/detail/${prod.id}`}><button className="btn btn-outline-primary btn-block">
                                                Ver detalles
                                            </button>
                                            </Nav.Link>
                                        </div>    
        </div>
        
    )
}

export default Item;