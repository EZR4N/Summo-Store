import React, {createContext, useState, useEffect, Children} from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../services/config";

export const ProductosContext = createContext()

export const ProductosProvider = ({children}) =>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const aplicarDescuento = (producto) =>({
        ...producto,
        precioSinDescuento: producto.precio,
        precio: producto.precio - (producto.precio * producto.descuento) /100
    })

    useEffect(() => {
        const fetchProductos = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, "productos"))
                const productosData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
            }))

            const productosConDescuento = productosData.map(producto =>(
                producto.descuento > 0 ? aplicarDescuento(producto) : producto 
            ))
            
            setProductos(productosConDescuento)
            } catch(error){
                console.log('error al obtener los productos', error)
            } finally {
                setLoading(false)
            }
        }
        fetchProductos()
    }, [])
    
    return (
        <ProductosContext.Provider value={{productos, loading}}>
            {children}
        </ProductosContext.Provider>
    )
    
}