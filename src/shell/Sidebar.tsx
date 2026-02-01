import styles from '../styles/shellStyles/Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.main}>
            <div className={styles.logo} onClick={() => navigate("/")} >
                <FontAwesomeIcon icon={faTruck} className={styles.icon} />
                <h1>Ritfast</h1>
            </div>
            <ul>
                <li onClick={() => navigate("/dashboard")} ><a href="#"><i className="bi bi-speedometer2"></i>Dashboard</a></li>
                <li onClick={() => navigate("/dealers")} ><a href="#"><i className="bi bi-shop"></i>Dealers</a></li>
                <li onClick={() => navigate("/users")} ><a href="#"><i className="bi bi-people"></i>Users</a></li>
                <li onClick={() => navigate("/track")} ><a href="#"><i className="bi bi-geo-alt"></i>Track</a></li>
                <li onClick={() => navigate("/settings")} ><a href="#"><i className="bi bi-gear"></i>Settings</a></li>
            </ul>
        </div>
    )
}

export default Sidebar