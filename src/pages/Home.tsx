import React from 'react'
import Navbar from '../components/Navbar'
import ProductAdverd from '../components/ProductAdverd'
import styles from './home.module.css';
const Home = () => {
 
    return (
      <>
      <div>
          <Navbar/>
      </div>      
      <div className={styles.container}>        
          <ProductAdverd/>
          <ProductAdverd/>
          <ProductAdverd/>
          <ProductAdverd/>
          <ProductAdverd/>
          <ProductAdverd/>
          <ProductAdverd/>
          <ProductAdverd/>
          <ProductAdverd/>
          <ProductAdverd/>
          <ProductAdverd/>
          
      </div>
      </>
  
     
  )
}

export default Home