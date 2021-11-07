const products = [
    
    { id:"1", 
    title:"Biofresh Adulto Razas Grandes", 
    tipo: "comida",
    price:1000, 
    description: "BIOFRESH es una línea de alimentos diferenciadas e innovadora. Cuenta con alto contenido de ingredientes realmente frescos y tecnología de conservación al 100% natural. el resultado de dicha combinación es un alimento de alta tecnología y elevado valor biológico, realmente natural. en su composición los productos BIOFRESH peseen: alto contenido de 3 tipos de carnes frescas y huevos, granos selectos, frutas y verduras frescas, orégano fresco y manzanilla.",
    imageUrl:"../assets/biofresh_adult.jpg", 
    stock:5 },

    { id:"2", 
    title:"Eukanuba Adulto Razas Grandes", 
    tipo: "comida",
    price:500, 
    description:"Para perros adultos de raza grande (mas de 25kg de peso en adultez) de 2 a 5 años de edad. Eukanuba reconoce esto y ofrece Eukanuba Adult Large Breed para satisfacer sus necesidades especiales. Eukanuba Adult Large Breed contiene glucosamina para proteger las articulaciones bajo tensión por el mayor peso de un perro de raza grande. Eukanuba Adult Large Breed también contiene niveles adecuados de fibra vegetal natural que ayuda en la digestión y ayudan a que su perro tenga un volumen de deposiciones apropiado para su fácil limpieza Eukanuba Adult Large Breed contiene croquetas grandes diseñadas para la boca de un perro de raza grande.",
    imageUrl:"../assets/eukanuba_adult.jpg", 
    stock:7 },

    { id:"3", 
    title:"Pelota de goma termoplástica - 8 u 11 cm", 
    tipo: "juguetes",
    price:200, 
    description:"Ideal para cachorros.",
    imageUrl:"../assets/pelota_goma.png", 
    stock:10 },


];

const getFetch = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(products)
    }, 2000)
})

export default getFetch