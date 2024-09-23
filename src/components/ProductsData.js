import { doc, setDoc } from "firebase/firestore";
import { db } from './firebase';

const products = [
 
        {
            id: "1",
            title: "airmax1",
            src: "./image/airmax1.png",
            content: "The Airmax 1 is a classic sneaker that offers both style and comfort. With its iconic design and cushioned sole, it's perfect for everyday wear or hitting the gym.",
            price: 99.99,
            colors: ["red" , "blue", "yellow", "green"],
            count: 1
        },
        {
            id: "2",
            title: "airmax2",
            src: "./image/arimax2.png",
            content: "Step up your sneaker game with the Airmax 2. Featuring a sleek silhouette and responsive cushioning, it's ideal for running or simply making a statement.",
            price: 119.99,
            colors: ["red", "blue", "yellow", "green"],
            count: 1
        },

        {
            id: "3",
            title: "airmax3",
            src: "./image/airmax3.jpg",
            content: "Experience the ultimate in comfort and style with the Airmax 3. Whether you're hitting the streets or lounging at home, these sneakers have you covered.",
            price: 109.99,
            colors: ["red", "blue", "yellow", "green"],
            count: 1
        },
        {
            id: "4",
            title: "airmax4",
            src: "./image/airmax4.png",
            content: "The Airmax 4 combines performance and style for a winning combination. With its breathable mesh upper and durable outsole, it's perfect for any adventure.",
            price: 129.99,
            colors: ["red", "blue", "yellow", "green"],
            count: 1
        },
        {
            id: "5",
            title: "airmax5",
            src: "./image/airmax5.png",
            content: "Take your sneaker game to new heights with the Airmax 5. Featuring innovative cushioning technology and a modern design, it's sure to turn heads wherever you go.",
            price: 139.99,
            colors: ["red", "blue", "yellow", "green"],
            count: 1
        },
        {
            id: "6",
            title: "airmax6",
            src: "./image/airmax6.png",
            content: "Elevate your style with the Airmax 6. With its sleek design and comfortable fit, it's the perfect choice for everyday wear or hitting the town with friends.",
            price: 109.99,
            colors: ["red", "blue", "yellow", "green"],
            count: 1
        },
        {
            id: "7",
            title: "airmax7",
            src: "./image/airmax7.png",
            content: "Make a statement with the Airmax 7. Featuring bold colors and a retro-inspired design, it's sure to add a pop of style to any outfit.",
            price: 119.99,
            colors: ["red", "blue", "yellow", "green"],
            count: 1
        },
        {
            id: "8",
            title: "airmax8",
            src: "./image/airmax8.png",
            content: "Get ready to conquer the day with the Airmax 8. With its lightweight construction and responsive cushioning, it's the perfect blend of performance and style.",
            price: 129.99,
            colors: ["red", "blue", "yellow", "green"],
            count: 1
        }

    
]

// we need to be able to add the products to fire store

const addProductstoFirestore = async () =>{
    try{
     for(const product of products){
  await setDoc(doc(db , "products" , product.id) , product)
     }
     console.log("All products added successfully!");
    }
    catch(error){
console.error("Error adding products: ", error)
    }
}

addProductstoFirestore()
  
     
