import React from "react"
import "../CSS/App.css"
import "../CSS/NameComponent.css"
// import ExpressJS from "../images/ExpressJS.png"
// import jQueryLogo from "../images/jQuery.png"
// import MongoDBLogo from "../images/MongoDBLogo.png"



const NameComponent = () =>{
    return (
        <div className = "slidein components namecomponent">
            <div className="left">
                <span id="firstlastname">Jeilani Mohamed</span>
                <span id="jobtitle">Full Stack Web Developer</span>
                <div className="arrows">
                    <i class="fas fa-angle-right fa-4x"></i>
                    <i class="fas second fa-angle-right fa-4x"></i>
                    <i class="fas third fa-angle-right fa-4x"></i>
                </div>
            </div>
            <div className="right">
            <span className="iconcontainer"><i class="fab fa-react"></i><h5>React</h5></span>
            <span className="iconcontainer"><i class="fab fa-node-js"></i><h5>Node</h5></span>
            <span className="iconcontainer"><i class="fab fa-etsy"></i><h5>Express</h5></span>
            <span className="iconcontainer"><i class="fas fa-database"></i><h5>MongoDB</h5></span>
            <span className="iconcontainer"><i class="fab fa-js-square"></i><h5>JavaScript</h5></span>
            <span className="iconcontainer"><i class="fab fa-css3-alt"></i><h5>CSS</h5></span>
            <span className="iconcontainer"><i class="fab fa-git-alt"></i><h5>Git</h5></span>
                {/* <span className="languageContainer"><i class="fab fa-react fa-4x"></i></span>
                <span className="languageContainer"><img alt="jQuery Logo" src={jQueryLogo}></img></span>
                <span className="languageContainer"><i alt = "Node Logo"class="fab fa-node fa-4x"></i></span>
                <span className="languageContainer"><img alt="Mongo Database" src={MongoDBLogo}></img></span>
                <span className="languageContainer"><img  alt="Express Logo" src={ExpressJS}></img></span> */}
            </div>
        </div>
    )
}

export default NameComponent