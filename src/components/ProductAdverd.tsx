import React from 'react'
import styles from './productAdverd.module.css'
const ProductAdverd = () => {

  return (
    <>
         <div className={styles.block}>
            <div className={styles.block_left}>
                <h2>Honda motosiklet arıyorum!!!</h2>
                
            </div>
            <div className={styles.block_right}>
                <span>Fiyat: 90-100 TL</span>
                <div className={styles.buttons}>
                  <button className={styles.offer_button}>Teklif Ver</button>
                  <button className={styles.detail_button}>Detay Gör</button>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default ProductAdverd