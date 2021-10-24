import React from 'react'
import { Link, useHistory, useLocation } from "react-router-dom";

const Navbar = (props) => {
    let history=useHistory();
    let location = useLocation();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        history.push('/login')
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'light':'dark'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">FCard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/contact"? "active": ""}`} to="/contact">Contact</Link>
                        </li>

                    </ul>
                    <div className="form-check form-switch mx-1">
                        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    </div>
                    {!localStorage.getItem('token')?<form className="d-flex"> 
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>:
                    <div>
                    <i className="fas fa-user-tag text-light mx-2"></i>
                    <button className="btn btn-primary mx-1" onClick={handleLogout}>Logout</button>
                    </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
