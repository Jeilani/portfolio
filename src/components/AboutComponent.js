import React from "react"
import "../CSS/App.css"
import "../CSS/About.css"

const AboutComponent = () =>{
    return (
        <div className = "slidein components aboutcomponent">
            <div className="abouttitle title">
                About
            </div>
            <div className="aboutbody">
                <p>
                    I'm a full-stack web developer with a focus on front-end. React is my primary framework but I will not be limited
                    by what I <i>already</i> know.
                </p>
                <p>
                    I'm a quick learner and more importantly, I'm curious.
                </p>
                <p> I also believe it's not what one knows, but
                    how one approaches problems. Attitude and problem-solving skills are the most important assets, in any context and especially
                    in programming.
                </p>
                <p>
                    I graduated with a Bachelor's degree in Public Relations degree recently and even though the research and creative problem-solving
                    was fun, I found more of a passion for programming. However I still carry with me all the assets of a PR specialist when coding website; I prioritze the user's experience.
                </p>
            </div>
        </div>
    )
}

export default AboutComponent
