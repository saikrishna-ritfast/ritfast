import styles from '../styles/shellStyles/Nav.module.css'
import profile from '../assets/profile.svg'

const Navbar = () => {
    return (
        <nav className={styles.main} >
            <img src={profile} alt="profile" />
            <i className="fa-solid fa-caret-down"></i>
        </nav>
    )
}

export default Navbar