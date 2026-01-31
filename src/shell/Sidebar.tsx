import styles from '../styles/shellStyles/Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <img src="./assets/logo.svg" alt="logo" />
            </div>
            <ul>
                <li><a href="#">Users</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Track</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}

export default Sidebar