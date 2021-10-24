import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Signup = (props) => {

    const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:""}) 
    let history = useHistory();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password }=credentials;
        
        const response = await fetch("http://localhost:5000/api/auth/createuser", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history.push("/");
            props.showAlert("Account Created Successfully","success")
        }
        else{
            props.showAlert("Invalid Details!","danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const style={
        "width":"53rem",
        "height":"35rem"
    }

    return (
        <div className="container mb-5 shadow-lg p-3 mb-5 bg-body rounded" style={style}>
            <h2>Create Your Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="container card mb-2">
                <div className="mb-3 my-2 mx-2">
                    <label htmlFor="name" className="form-label"><b>Name</b></label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} required/>
                </div>
                <div className="mb-3 my-2 mx-2">
                    <label htmlFor="email" className="form-label"><b>Email address</b></label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 my-2 mx-2">
                    <label htmlFor="password" className="form-label"><b>Password</b></label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} required/>
                </div>
                <div className="mb-3 my-2 mx-2">
                    <label htmlFor="cpassword" className="form-label"><b>Confirm Password</b></label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} required/>
                </div>
                <button type="submit" className="btn btn-outline-primary mb-3 my-2">Create</button>
                </div>
                </form>
        </div>
    )
}

export default Signup
