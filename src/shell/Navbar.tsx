import styles from '../styles/shellStyles/Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { Popover } from "antd";
import { LogoutOutlined } from "@ant-design/icons";


const Navbar = () => {
    const content = (
        <ul className={styles.popoverBox}>
            <li><a href="#"><FontAwesomeIcon icon={faAddressCard} />My Profile</a></li>
            <li><a href="#"><i className="bi bi-shield-lock" ></i>Change Password</a></li>
            <li><a href="#"><LogoutOutlined />Logout</a></li>
        </ul >
    );
    const text = <div className={styles.popoverTitle}>
        <p>Sai Krishna</p>
        <h1>kasi94064@gmail.com</h1>
    </div>;

    return (
        <nav className={styles.mainNavabar} >
            <Popover content={content} title={text} placement="bottomRight">
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
            </Popover>
        </nav>
    )
}

export default Navbar