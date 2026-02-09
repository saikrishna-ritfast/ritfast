
import { Link } from "react-router-dom";
import TextBox from "../../components/TextBox";
import styles from "../../styles/auth.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import ParticleBackground from "../../components/ParticleBackground";

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.authContainer} >
            <ParticleBackground />
            <div className={styles.formContainer}>
                <button className={`${styles.buttonSocial} ${styles.buttonSocialFacebook}`} >
                    <span><FontAwesomeIcon icon={faFacebookF} /></span> Sign In with Facebook
                </button>
                <button className={`${styles.buttonSocial} ${styles.buttonSocialGoogle}`}>
                    <span><FontAwesomeIcon icon={faGoogle} /></span> Sign In with Google+
                </button>
                <Divider className={styles.text} plain>OR</Divider>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.formContainer}>
                        <TextBox type="tel" placeholder="Enter phone number" name="phone" value="+91 7995115729" onChange={(e) => console.log(e.target.value)} />
                        <TextBox type="password" placeholder="Enter password" name="password" value="2345" onChange={(e) => console.log(e.target.value)} />
                        <div className={styles.formContainer}>
                            <section>
                                <div>
                                    <input className={styles.checkbox} type="checkbox" id="checkbox" />
                                    <label htmlFor="checkbox" className={styles.text} >Keep me signed in</label>
                                </div>
                                <Link className={styles.link} to="/SignUp">Forgot password?</Link>
                            </section>
                            <button className={styles.onSubmitBtn} onClick={() => navigate("/dashboard")} type="submit">
                                Sign In
                            </button>
                            <p className={styles.text}>
                                Do not have an account?{" "}
                                <Link className={styles.link} to="/SignUp">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
