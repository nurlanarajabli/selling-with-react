import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState,addToCart} from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard';
import Header from '../../Components/Header/Header';
import SectionFirst from '../../Components/SectionFirst/SectionFirst';

const Home = () => {
    const [products, setProducts] = useState([]); 
    useEffect(() => {
      axios.get('https://dummyjson.com/products')
        .then(res => {
          setProducts(res.data.products);
        });
    }, []);
// const [products, setProducts] = useState([]);
// const getProducts=()=>{
//     axios.get('https://dummyjson.com/products/category/smartphones')
//     .then(res => {
//         // console.log(res)
//         setProducts(res.data.products)
//     })
// }
// useEffect(()=>
{  
 
    
// getProducts()
// }, [])
 const addToCart = (productId) => {
      console.log("id", productId, "sebete elave edildi.");
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      const updatedCart = [...cart, productId];
      
      localStorage.setItem('cart', JSON.stringify(updatedCart));
  
    };
  return (
       
<div> 
     <Header/>
    <SectionFirst/>
    <div style={{width:'90%', display:'flex', justifyContent:'space-between', flexWrap:'wrap', alignItems:'center', gap:'30px'}}>
        {products.map(item => <ProductCard item={item} onClick={() => addToCart(item)} />
        )}   
         
    </div>
</div>


  )
}
}
export default Home

  