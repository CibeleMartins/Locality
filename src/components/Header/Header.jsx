import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import logoOp from '../../assets/images/logoOp.png'

export default function Header() {

  return (
          <>
            <header className={styles.header}> 

              <img src={logoOp} alt='logo' width={130}></img>
              
                <nav className={styles.navbar}>
                  <Link to='/'>CADASTRO</Link>
                  <Link to='/AllMap'>MAPA</Link>
                </nav>
            </header>
          </>
        )
}