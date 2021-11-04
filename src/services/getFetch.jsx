const products = [
    
    { id:"1", 
    title:"Biofresh Adulto Razas Grandes", 
    tipo: "Comida",
    price:50, 
    imageUrl:"../assets/biofresh_adult.jpg", 
    stock:5 },

    { id:"2", 
    title:"Eukanuba Adulto Razas Grandes", 
    tipo: "Comida",
    price:50, 
    imageUrl:"../assets/eukanuba_adult.jpg", 
    stock:15 },


];

const getFetch = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(products)
    }, 2000)
})

export default getFetch