import styles from '../assets/styles/Navbar.module.css'
import Logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Navbar =  () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link to='/'>
                            <img src={Logo} alt="logo" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar