import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container my-0 contact-form shadow-lg p-3 mb-5 bg-body rounded card">
                <div className="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                <form>
                    <h3>Drop Us a Message</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group my-2">
                                <input type="text" name="txtName" className="form-control" placeholder="Your Name *"/>
                            </div>
                            <div className="form-group my-2">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *"/>
                            </div>
                            <div className="form-group my-2">
                                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *"/>
                            </div>
                            <div className="form-group my-3">
                                <b className="btn btn-outline-primary">Submit</b>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group my-1">
                                <textarea name="txtMsg" className="form-control" placeholder="Your Message *" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
