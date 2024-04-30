import React from 'react'
import styles from '../Header/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHamburger, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
  return (
    <div>
        <header>
            <div className={styles.containerFirst}>

          <div className={styles.headerTop}>
            <div className={styles.right}> 
            <div className={styles.icons}> 

        <div className={styles.icon}>
              <FontAwesomeIcon icon={faFacebook}/>
        </div>

        <div className={styles.icon}>
             <FontAwesomeIcon icon={faTwitter}/>
        </div>

            <div className={styles.icon}>   
              <FontAwesomeIcon icon={faInstagram}/>
            
            </div>  
             <div className={styles.icon}>
                 <FontAwesomeIcon icon={faLinkedin}/>
               
             </div>
            </div>

              <div className={styles.contact}>
        <FontAwesomeIcon icon={faPhone} />
        <span>(+1) 234 5678 9101</span>
        <FontAwesomeIcon icon={faEnvelopeOpen}/>
        <span>shop@yourdomain.com</span>
        
        </div>
        </div>
        </div>
 
      <div  className={styles.headerBottom}>
        <div className={styles.bottom}>
 <div className={styles.logo }>
<h1>Selling<span className={styles.span}>.</span></h1>
        </div>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Special</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        <div className={styles.menu}>
          <FontAwesomeIcon icon={faHamburger}/>
        </div>
      </div>
      </div>
        </div>
       
           </header>
        </div>
       
     
   

        
       
      
   
  )
}

export default Header
