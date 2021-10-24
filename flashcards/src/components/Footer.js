import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    const style={
            "padding": "30px 0",
            "color": "#f0f9ff",
            "background-color": "#031633"
    }
    return (
        <>
        <div className="bottomfooter">
        <footer className="footer">
            <div className="footer-dark" style={props.mode==='light'?{}:style}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><Link to="/">Upload to Cloud</Link></li>
                                <li><Link to="/">Premium Version</Link></li>
                                <li><Link to="/">Cloud Storage</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><Link to="/">FCard</Link></li>
                                <li><Link to="/">Team</Link></li>
                                <li><Link to="/">Dhruv</Link></li>
                                <li><Link to="/">Himanshu</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Flash-Card The Amazing Website</h3>
                            <p>We always care about our customers and users.we provide amazing UI for users for better understanding.</p>
                        </div>
                        <div className="col item social"><Link to="/"><i className="fa fa-facebook"></i></Link><Link to="/"><i className="fa fa-twitter"></i></Link><Link to="/"><i className="fa fa-snapchat"></i></Link><Link to="/"><i className="fa fa-instagram"></i></Link></div>
                    </div>
                    <p className="copyright">Flash-Card The Amazing Website © 2021</p>
                </div>
            </div>
        </footer>
    </div>
    </>
    )
}

export default Footer
