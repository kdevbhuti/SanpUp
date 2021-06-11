import React from "react";
import "./signup.css"
import { Link, useHistory } from "react-router-dom";

const SignUp = () =>{
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("")
    const history = useHistory();

    const handleNameInput = (event)=>{
        setName(event.target.value);
    }

    const handleEmailInput = (event) =>{
        setEmail(event.target.value)
    }

    const handlePasswordinput = (event) =>{
        setPassword(event.target.value)
    }

    const handleSubmitUserDetails = async()=>{
        if(name !== "" && email !== "" && password != ""){
            const responce = await fetch("http://localhost:4000/api/v1/save-user-data", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: name ,
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
            setErrorMessage("Please Enter all fields")
        }
       
    }

    return(
        <div className="signup">
        <h1>SighUp</h1>
            <div className="form">
                <span>{errorMessage}</span>
                <input onChange={handleNameInput} type="text" placeholder="Name"/>
                <input onChange={handleEmailInput} type="email" placeholder="Email"/>
                <input onChange={handlePasswordinput} type="text" placeholder="Password"/>
                <button onClick={handleSubmitUserDetails}>Submit</button>
                <Link to={{pathname: "/login"}}>Login</Link>
            </div>
        </div>
    )
}

export default SignUp