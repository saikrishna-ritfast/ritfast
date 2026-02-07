
import { Link } from "react-router-dom";
import TextBox from "../../components/TextBox";
import styles from "../../styles/auth.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignIn = () => {
    return (
        <div className={styles.authContainer} >
            <button className={`${styles.buttonSocial} ${styles.buttonSocialFacebook}`} >
                <span><FontAwesomeIcon icon={faFacebookF} /></span> Sign In with Facebook
            </button>
            <button className={`${styles.buttonSocial} ${styles.buttonSocialGoogle}`}>
                <span><FontAwesomeIcon icon={faGoogle} /></span> Sign In with Google+
            </button>
            <p className={styles.text} >OR</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formContainer}>
                    <TextBox type="email" placeholder="Enter email ID" name="email" value="sai" onChange={(e) => console.log(e.target.value)} />
                    <TextBox type="password" placeholder="Enter password" name="password" value="2345" onChange={(e) => console.log(e.target.value)} />
                    <div className={styles.formContainer}>
                        <section>
                            <div>
                                <input className={styles.checkbox} type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox" className={styles.text} >Keep me signed in</label>
                            </div>
                            <Link className={styles.link} to="/SignUp">Forgot password?</Link>
                        </section>
                        <button className={styles.onSubmitBtn} type="submit">
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
    );
};

export default SignIn;
