import {Link} from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.css';
import logoOp from '../../assets/images/logoOp.png'
import menuIcon from '../../assets/images/menuIcon.png'


export default function Header() {

  const [display, setDisplay] = useState('none')

  return (
          <>
            <header className={styles.header}> 

              <img src={logoOp} alt='logo' width={130}></img>
              
                <nav className={styles.navbar}>
                  <Link to='/'>CADASTRO</Link>
                  <Link to='/AllMap'>MAPA</Link>
                </nav>


                <div className={styles.menu}
                onClick={()=> setDisplay('flex')}
                  style={{marginRight:'30px', marginTop:'10px'}}>
                  <img src={menuIcon}
                  alt='menu'
                  style={{width: '20px'}}></img>
                </div>

              
            </header>
          </>
        )
}