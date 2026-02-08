import { useState } from "react";
import { Link } from "react-router-dom";
import TextBox from "../../components/TextBox";
import styles from "../../styles/auth.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Divider } from 'antd';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Register = () => {

    const [step, setStep] = useState(1);

    const onClickNext = () => {
        setStep(prev => prev + 1)
    }

    const onClickPrev = () => {
        setStep(prev => prev - 1)
    }

    return (
        <div className={styles.authContainer} >
            {step > 1 && <button className={styles.backBtn} onClick={() => onClickPrev()}><FontAwesomeIcon icon={faAngleLeft} />Back to previous</button>}
            <div className={styles.formContainer}>
                <button className={`${styles.buttonSocial} ${styles.buttonSocialFacebook}`} >
                    <span><FontAwesomeIcon icon={faFacebookF} /></span> Sign Up with Facebook
                </button>
                <button className={`${styles.buttonSocial} ${styles.buttonSocialGoogle}`}>
                    <span><FontAwesomeIcon icon={faGoogle} /></span> Sign Up with Google+
                </button>
                <Divider className={styles.text} plain>OR</Divider>
                <form onSubmit={(e) => e.preventDefault()}>
                    {step === 1 && <div className={styles.formContainer} >
                        <TextBox type="text" placeholder="Enter your name" name="name" value="" onChange={(e) => console.log(e.target.value)} />
                        <TextBox type="tel" placeholder="Enter phone number" name="phone" value="+91 7995115729" onChange={(e) => console.log(e.target.value)} />
                        <button className={styles.onSubmitBtn} type="button" onClick={() => onClickNext()}>
                            Next
                        </button>
                        <p className={styles.text}>
                            Already have an account?{" "}
                            <Link className={styles.link} to="/SignIn">
                                Sign In
                            </Link>
                        </p>
                    </div>}
                    {step === 2 && <div className={styles.formContainer}>
                        <TextBox type="email" placeholder="Enter email ID" name="email" value="sai@gmail.com" onChange={(e) => console.log(e.target.value)} />
                        <TextBox type="password" placeholder="Enter password" name="password" value="2345" onChange={(e) => console.log(e.target.value)} />
                        <div className={styles.formContainer} >
                            <button className={styles.onSubmitBtn} type="button" onClick={() => onClickNext()}>
                                Next
                            </button>
                        </div>
                    </div>}
                    {step === 3 &&
                        <div className={styles.formContainer} >
                            <TextBox type="text" placeholder="Enter company name" name="companyName" value="" onChange={(e) => console.log(e.target.value)} />
                            <button className={styles.onSubmitBtn} type="submit">
                                Register
                            </button>
                        </div>
                    }
                </form>
            </div>
        </div>
    );
};

export default Register;
