import React,{useState,useEffect} from 'react'
import styles from './Styles.module.css'
import image from '../assets/landingPic.jpeg'
import { Link } from 'react-router-dom'
  
const Login = () => {

  const [inputValues, setInputValue] = useState({
 
    email: "",
    password: "",
  
  });

  const [validation, setValidation] = useState({

    email: "",
    password: "",
   
  });
  

async function callAPI(data){
  const res = await fetch("https://58d7-14-194-2-50.in.ngrok.io/login",{
      method:"POST",
      body: JSON.stringify(data),
      headers: { "Content-Type" : "application/json"},
      redirect: "follow"

  });
  const data1 = await res.text();
  console.log(data1)
  
  return data1
}


  

  function handleSubmit(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;

    // email validation
      const email=inputValues.email;
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      errors.email = "Invalid email address";
    } else {
      errors.email = "";
    }

    //password validation
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if ((/^^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password))){
      
      errors.password="Password must contain capital letter, digit and length must be greater than 8"
    } else {
      errors.password = "";
    }

   

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const obj={}
    obj.email=inputValues.email;
    obj.password=inputValues.password;

    console.log(obj)
    callAPI(obj)
  };





    return(
        <>

<div className={`${styles.container} `}>
 
      <h1 className={`${styles.header}`}> Login</h1>
      <div className="form">
        <form>
        
          <div className={styles.inputcontainer}>
          <div className={styles.label}>Email </div>
            <input
              className={styles.inputtext}
              placeholder="Enter your email"
              type="email"
              name="email"
              onMouseOut={(e) => handleSubmit(e)}
              value={inputValues.email}
              required
            />
            {<p className="error">{validation.email}</p>}
          </div>
       
          <div className={styles.inputcontainer}>
            <div className={styles.label}>Password </div>
            <input
              className={styles.inputtext}
              placeholder="Enter your password"
              type="text"
              name="password"
              onMouseOut={(e) => handleSubmit(e)}
              value={inputValues.password}
              required
            />
              {<p className="error">{validation.password}</p>}

          </div>
       
          <input
            type="submit"
            name="submit"
            className={styles.inputsubmit}
            value="Sign In"
          onClick={(e) => handleSubmit2(e)}
          />
      
       
      <div className={styles.already}>New User?<Link to="/Register" className={styles.link}>Register</Link></div>
        </form>
      </div>
    </div>
        </>
    )
}
export default Login;
