let productos = []



class Producto {
    descuento = 0
    lanzamiento = false
    constructor(id, nombre, img, descripcion, marca, categoria ,precio, stock, descuento, lanzamiento){
    this.id = id
    this.nombre = nombre
    this.img = img
    this.descripcion = descripcion
    this.marca = marca
    this.categoria = categoria
    this.precio = precio
    this.stock = stock
    if (descuento) this.descuento = descuento
    if (lanzamiento)  this.lanzamiento = lanzamiento
    }
}
let producto1 = new Producto(1, "Sedal Prebióticos + Biotina Shampoo", "/src/assets/imagenes/productos/sedal-biotina.webp" , "Nuevo Shampoo Sedal Prebióticos + Biotina: que reduce la caída del cabello, fortaleciendo la fibra capilar ", "Sedal", "higienePersonal", 5400, 40)
let producto2 = new Producto(2, "Sedal Bomba Argán Shampoo", "/src/assets/imagenes/productos/sedal-bomba.webp", "Shampoo Bomba Argán: ¡Dile hola a un pelo suave, con brillo, lleno de vida! Nuestra shampoo tiene una fórmula exclusiva con todo el poder del Óleo de Argán para restaurar el cabello", "Sedal","higienePersonal", 6600, 45, 0)
let producto3 = new Producto(3,"Sedal Restauración Instantánea Shampoo ", "/src/assets/imagenes/productos/sedal-restauracion.webp", "Nuevo Shampoo Sedal Restauración instantánea con Infusión Activa: una combinación de óleo de almendra, vitamina C y Keratina que elimina el daño visible", "Sedal","higienePersonal", 4500,20 ,0)
let producto4 = new Producto(4,"Sedal Caspa Control Shampoo", "/src/assets/imagenes/productos/sedal-caspa.webp", "La fórmula exclusiva de shampoo Sedal Caspa Control contiene un componente eficaz contra la caspa, y además deja tu pelo suave y libre de señales de caspa", "Sedal","higienePersonal", 5000, 50 ,0)
let producto5 = new Producto(5, "Sedal Liso Perfecto Acondicionador", "/src/assets/imagenes/productos/sedal-liso.jpg", "Nuevo Acondicionador Sedal Liso Perfecto con Infusión Activa, que combina óleo de macadamia, vitamina C y proteína de seda para que tu pelo luzca liso y fuerte" , "Sedal","higienePersonal", 4000, 80, 0)
let producto6 = new Producto(6, "Restauración Instantánea Acondicionador", "/src/assets/imagenes/productos/sedal-restauracion-instantanea-190-ml.jpg", "Nuevo Acondicionador Sedal Restauración instantánea con Infusión Activa: combinación de óleo de almendra, vitamina C y Keratina que elimina el daño visible.", "Sedal","higienePersonal", 6400,35,0)
let producto7 = new Producto(7, "Antitranspirante en Barra Protección Total", "/src/assets/imagenes/productos/dove-men.webp", "Obtené protección por 72 horas contra el sudor y mal olor en las axilas con este antitranspirante diseñado para personas activas.", "Dove","higienePersonal", 5000, 32, 0)
let producto8 = new Producto(8, "Óleo Bifásico Bond Intense Repair", "/src/assets/imagenes/productos/dove-oleo.jpg", "El nuevo óleo bifásico Dove Bond Intense Repair, con textura liviana, tecnología patentada Bio Protein Care y 7% de péptido complex, nutre y realza la vitalidad del cabello, dandole a tu pelo doble poder renovador", "Dove","higienePersonal", 8000, 15, 0)
let producto9 = new Producto(9, "Shampoo Reconstrucción Completa", "/src/assets/imagenes/productos/dove-reconstruccion.jpg", "Restaurá la fortaleza de tu pelo contra el quiebre con este tratamiento de nutrición progresiva para pelo dañado.", "Dove","higienePersonal", 3000, 90)
let producto10 = new Producto(10, "Jabón de Tocador Dove Original Individual", "/src/assets/imagenes/productos/dove-jabon.webp", "Con el jabón en barra original tendrás tu piel suave con cada lavado.", "Dove","higienePersonal", 1500, 80, 0)
productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10)


// export const getProductos = () => {
//     return new Promise (resolve =>{
//         setTimeout(()=>{
//             resolve (productos)
//         }, 1000)
//     })
// }
export default productos