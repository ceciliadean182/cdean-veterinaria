import { useCartContext } from "../../context/CartContext";
import  { Button, Form } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import '../ItemDetail/ItemDetail.css';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import { getFirestore } from "../../services/getFirestore";
import firebase from "firebase";
import 'firebase/firestore';


const Cart = () => {
    const{cartList, total, removeCart, removeItem, calcularCantidad} = useCartContext();
	const [idOrder, setIdOrder] = useState('')

    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email: ''
    })


	const generarOrden = (e) => {
		e.preventDefault()

		let orden = {}
		
		orden.date = firebase.firestore.Timestamp.fromDate(new Date());    
        orden.buyer = formData
        orden.total = total();
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.title;
            const precio = cartItem.price * cartItem.cantidad;
            
            return {id, nombre, precio}   
        })


		const dbQuery = getFirestore();
		dbQuery.collection('orders').add(orden)
		.then(resp => setIdOrder(resp.id))// mostrar id al usuario
        .catch (error => alert("Error:", error))
        .finally(()=> setFormData({
            name:'',
            phone:'',
            email: ''
        }))

		const itemsToUpdate = dbQuery.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.id)
        )
    
        const batch = dbQuery.batch();
        
        // por cada item restar del stock la cantidad de el carrito
    
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                })
            })
    
            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })


	}	
	

	const handleChange = (e) => {
		setFormData({
			...formData, 
			[e.target.name]: e.target.value
		})
	}

	


    

    return(
        <>
			{calcularCantidad() === 0 ? (
				<div className="container">
					
					<h1 className="cartMessage">No Tienes elementos en el carrito</h1>
					
					<Button as={Link} to="/" className="addCart">
						Comprar
					</Button>
				</div>
			) : (
        <div className='container'>
            <h1 className="">Carrito</h1>
			
			<section>
                {idOrder!==''&& <label>El id de su orden es : {idOrder}</label>}
            </section>

            <table className="table table-bordered text-center">
								<thead>
									<tr className="fs-5 fw-bold">
										<th>Cantidad</th>
										<th>Producto</th>
										<th>Precio unitario</th>
										<th>Subtotal</th>
										<th></th>
									</tr>
								</thead>
							<tbody>
								{cartList.map((prod) => (
									<tr key={prod.id}>
										<td>{prod.cantidad}</td>
										<td>{prod.title}</td>
										<td>{`$ ${(prod.price)}`}</td>
										<td>{`$ ${(prod.cantidad * prod.price)}`}</td>
										<td><Button className="addCart" onClick={() => removeItem(prod.id)}><FaTrash /></Button></td>
									</tr>
								))}
							</tbody>
						</table>
                        <div>
                            <p>Total compra: ${total()}</p>
                        </div>
            
            {/* <Button className="addCart" >Pagar</Button> */}
            <Button className="addCart" onClick={()=>removeCart()}>Eliminar compra</Button>
			<div>
			<Form onSubmit={generarOrden} onChange={handleChange}>	
				
					<Form.Group className="mb-3">
						<Form.Label>Nombre completo</Form.Label>
						<Form.Control placeholder="Ej: Juan Pérez"
							name="name"
							required
							defaultValue={formData.name}/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Correo Electrónico</Form.Label>
						<Form.Control placeholder="Ej: juan@hola.com"
							name="email"
							required
							defaultValue={formData.email}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Teléfono</Form.Label>
						<Form.Control placeholder="Ej: 095700684"
							name="phone"
							defaultValue={formData.phone}
							required/>
					</Form.Group>
					
			
					<Button type="submit" className="addCart">Enviar</Button>
		</Form>
			</div>
	  
			


        </div>
    )}
    </>
);
}

export default Cart;