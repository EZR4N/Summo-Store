import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../services/config'
import { CarritoContext } from '../../context/CarritoContext'
import { collection, addDoc} from "firebase/firestore"

const Checkout = () => {
    
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [orderId, setOrderId] = useState("")
    const [error, setError] = useState("")


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
                vaciarCarrito()
            })
            .catch(error =>{
                console.log(error)
                setError("No se puede crear la orden, revise el código")
            })
        }
  return (
    <>
        <h2>Checkout</h2>

        <form onSubmit={manejadorFormulario}>
            {
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p> {producto.item.nombre} x {producto.cantidad}</p>
                        <p> Precio: ${producto.item.precio}</p>
                    </div>
                ))
            }

            <div>
                <label htmlFor=""> Nombre: </label>
                <input type="text" onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div>
                <label htmlFor=""> Apellido: </label>
                <input type="text" onChange={(e) => setApellido(e.target.value)} />
            </div>

            <div>
                <label htmlFor=""> Telefono:  </label>
                <input type="text" onChange={(e) => setTelefono(e.target.value)} />
            </div>

            <div>
                <label htmlFor="" > Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor=""> Confirmar email: </label>
                <input type="text" onChange={(e) => setEmailConfirmacion(e.target.value)} />
            </div>

            {
                error && <p> {error} </p>
            }

            {
                orderId && (
                    <div>
                        <p>gracias por su compra. Tu numero de orden es: {orderId}</p>
                    </div>
                )
            }
            <button type="submit"> Finalizar orden</button>
        </form>
    </>
  )
}

export default Checkout
