import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css"

const Login = () =>{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")
    const history = useHistory();

    const handleEmailInput = (event) =>{
        setEmail(event.target.value);
       
    }

    const handlePasswordinput = (event) =>{
        setPassword(event.target.value);
    }

    const handleSubmitUserDetails = async()=>{
        
        if( email !== "" && password != ""){
            const responce = await fetch("http://localhost:4000/api/v1/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const data = await responce.json()
            history.push({
                pathname: '/',
                state: { userData: data }
            });
        }else{
            // setErrorMessage("Please Enter all fields")
        }
       
    }

    return(
        <div className="login">
        <h1>Log In</h1>
            <div className="form">
                <input type="text" onChange={handleEmailInput} placeholder="Email"/>
                <input type="text" onChange={handlePasswordinput} placeholder="Password"/>
                <button onClick={handleSubmitUserDetails}>Login</button>
                <Link to={"/signup"}>SignUp</Link>
            </div>
        </div>
    )
}

export default Login;