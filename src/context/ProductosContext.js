import React, {createContext, useState, useEffect, Children} from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../services/config";

export const ProductosContext = createContext()

export const ProductosProvider = ({Children}) =>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProductos = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, "productos"))
                const productosData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
            }))
            setProductos(productosData)
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