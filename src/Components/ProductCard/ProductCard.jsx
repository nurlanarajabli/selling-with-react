import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({item,onClick}) => {
  return (
    <div>
        <section className={styles.productCard}>
            <div className={styles.container}>
                <div className={ styles.cardBox}>
                    <div className={styles.image}>
                        <img src={item.thumbnail} alt="logo" />
                    </div>
                    <div className={styles.textOne}>
                        <h4>{item.title}</h4>
                        <div className={styles.icon} style={{display:'flex',alignItems:'center', justifyContent:'center', gap:'15px'}}>
                               <FontAwesomeIcon icon = {faStar} style={{color:'#F89D13' }}  />
                             <FontAwesomeIcon icon={faHeart} style={{color:'red'}} />
                        </div>
                        
                        <p>{item.category}</p>
                        <button onClick={onClick} className={styles.btn}>Cart</button>
                        <button onClick={onClick} className={styles.btn2}>View </button>

                    </div>

                </div>

            </div>

            
        </section>
        
        
        
        </div>
  )
}

export default ProductCard