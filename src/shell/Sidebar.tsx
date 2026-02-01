import styles from '../styles/shellStyles/Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from "@fortawesome/free-regular-svg-icons";
import { Popover, Button } from "antd";

const Sidebar = () => {
    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <FontAwesomeIcon icon={faTruck} className={styles.icon} />
                <h1>Ritfast</h1>
            </div>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Dealers</a></li>
                <li><a href="#">Users</a></li>
                <li><a href="#">Track</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}

export default Sidebar