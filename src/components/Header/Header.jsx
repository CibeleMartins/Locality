import React from 'react';
import logoOp from '../../assets/images/logoOp.png'
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
 

export default function Header() {
    
      return (
        <>
          <header className={styles.header}> 

              <img src={logoOp} alt='logo' width={130}></img>
            
              <nav className={styles.navbar}>
                <Link to='/'>REGISTER</Link>
                <Link to='/view'>VIEW</Link>
              </nav>
          </header>
        </>
      )
}