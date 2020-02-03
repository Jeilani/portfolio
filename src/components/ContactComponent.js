import React from "react"
import "../CSS/App.css"
import "../CSS/Contact.css"

const ContactComponent = () =>{
    return (
        <div className = "slidein components">
            <div className="contacttitle title">
                Contact
            </div>
            <div className="contactcontent">
                <span><a href="http://www.linkedin.com/in/jeilani25" target="_blank" rel="noopener noreferrer" ><i className="fontsincontact fab fa-linkedin fa-3x"></i></a></span>
                <span><a href="http://www.facebook.com/jeilanijm25" target ="_blank" rel="noopener noreferrer" ><i className="fontsincontact fab fa-facebook fa-3x"></i></a></span>
                <span><a href="mailto:jeilanijm25@icloud.com"><i className=" fontsincontact far fa-envelope-open fa-3x"></i></a></span>
                <span><a href="tel:720-921-4481"><i class="fas fa-phone fa-3x"></i></a></span>
            </div>
        </div>
    )
}


export default ContactComponent