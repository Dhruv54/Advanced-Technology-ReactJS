import React from 'react'

const About = (props) => {
    return (
        <>
        <div>
            <h2 className={`container my-2 ${props.mode==='light'?'':'text-light'}`}>About Us</h2>
            <div className="container card border-dark mb-5">
            <div className="container card-body text-primary">
                    <h5 className="card-title">Owner  <span className="badge rounded-pill bg-dark">new</span></h5>
                    <p className="card-text text-dark">Flash-Card The Amazing Website. We always care about our customers and users.we provide amazing UI for users for better understanding.</p>
            </div>
                <div className="container card-body text-primary my-2">
                    <h5 className="card-title">Features  <span className="badge rounded-pill bg-dark">new</span></h5>
                    <p className="card-text text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda sunt quidem consequatur earum dolores dolorum nemo perspiciatis sapiente et dolorem.</p>
            </div>
                <div className="container card-body text-primary my-2">
                    <h5 className="card-title">Cloud Storge  <span className="badge rounded-pill bg-dark">new</span></h5>
                    <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsam provident vel corrupti error animi corporis veritatis officia illo ipsum id, ex similique, minima odio ipsa voluptate? A, harum.</p>
            </div>
            <div className="container card-body text-primary my-2">
                    <h5 className="card-title">Premium Section  <span className="badge rounded-pill bg-dark">new</span></h5>
                    <p className="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, accusamus asperiores aspernatur veniam perspiciatis aliquid!</p>
            </div>
            </div>
            </div>
        </>
    )
}

export default About
