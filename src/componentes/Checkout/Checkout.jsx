import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../services/config'
import { CarritoContext } from '../../context/CarritoContext'
import { collection, addDoc} from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Checkout.scss'

const Checkout = () => {
    
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [orderId, setOrderId] = useState("")
    const [error, setError] = useState("")
    const [compraAprobada, setCompraAprobada] = useState(false)

    

    const navigate = useNavigate()
        useEffect(() => {
            compraAprobada && alertaCompraExitosa(orderId)
        }, [compraAprobada, navigate])

        const alertaCompraExitosa = (orderId) =>{
            Swal.fire({
                title: "Compra realizada con éxito!",
                text: `Su numero de compra es ${orderId}\n Gracias por comprar en Summo Store!`,
                icon: "success",
                confirmButtonText: "Ok 👍"
              }).then(() => {
                navigate("/")
              });
        }

        const manejadorFormulario = (event) =>{
            event.preventDefault()
            if(!nombre || !apellido || !telefono || !email ||!emailConfirmacion){
                setError("Por favor completa todos los campos")
                return
            }

            if(email !== emailConfirmacion){
                setError("Los emails no coinciden")
                return
            }
            
            const orden = {
                items: carrito.map(producto =>({
                    id: producto.item.id,
                    nombre: producto.item.nombre,
                    cantidad: producto.cantidad
                })),
                total: total,
                fecha: new Date(),
                nombre,
                apellido,
                telefono,
                email
            }

            
            addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrderId(docRef.id)
                setCompraAprobada(true)
                vaciarCarrito()
            })
            .catch(error =>{
                console.log(error)
                setError("No se puede crear la orden, revise el código")
            })
        }
  return (
    <>
        <h2 className='checkoutTitulo'>Checkout</h2>

        <form className='checkoutForm' onSubmit={manejadorFormulario}>
            <div className='checkoutControlCard'>
            {
                carrito.map(producto => (
                    <div className='checkoutControlDiv' key={producto.item.id}>
                        <p className='checkoutControlProducto'> {producto.item.nombre} x {producto.cantidad}</p>
                    </div>
                ))
            }
            </div>

            <h3 className='checkoutTotal'> Total: ${total} </h3>


            <div className='checkoutFormInputsDiv'>
            <div className='checkoutFormInputDiv'>
                <label htmlFor=""> Nombre: </label>
                <input type="text" onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div  className='checkoutFormInputDiv'>
                <label htmlFor=""> Apellido: </label>
                <input type="text" onChange={(e) => setApellido(e.target.value)} />
            </div>

            <div  className='checkoutFormInputDiv'> 
                <label htmlFor=""> Telefono:  </label>
                <input type="text" onChange={(e) => setTelefono(e.target.value)} />
            </div>

            <div  className='checkoutFormInputDiv'>
                <label htmlFor="" > Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div  className='checkoutFormInputDiv'>
                <label htmlFor=""> Confirmar email: </label>
                <input type="text" onChange={(e) => setEmailConfirmacion(e.target.value)} />
            </div>
            </div>
            {
                error && <div className='checkoutFormError'> 
                    <h3>{error}</h3> 
                    </div>
            }

            {
                orderId && (
                    <div className='checkoutGracias'>
                        <p>gracias por su compra. Tu numero de orden es: {orderId}</p>
                    </div>
                )
            }
            <button className='checkoutFormSubmit' type="submit"> Finalizar orden</button>
        </form>
    </>
  )
}

export default Checkout
