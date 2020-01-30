import React from "react"
import "../../CSS/ProjectsComponent.css"
import airjordanthumbnail from "../../images/airjordanthumbnail.png"
import randomgeneratoricon from "../../images/randomgeneratorthumbnail.png"
import asteroidthumbnail from "../../images/asteroidthumbnail.png"
import OldPortfolio from "../../images/OldPortfolioThumbnail.png"
import PatatapThumbnail from "../../images/PatatapThumbnail.png"

const processingProjects = [
    {
        index: 0,
        title: "Old Portfolio",
        imgSrc: OldPortfolio,
        alt: "Screenshot of old portfolio",
        p: "I built with this boostrap. I added some cutom styling with flexbox to tweak some design elements that boostrap won't allow. In the second section I used my skills in Processing.js to create an affect where the balls on the screen follow the users mouse. I also made the Dark Mode option as an add-on through jQuery",
        imageLink: "https://jeilani.github.io/Portfolio/",
        sourceCodeLink: "https://github.com/Jeilani/Portfolio"
},
    {
        index: 1,
        title: "PatatapProject",
        imgSrc: PatatapThumbnail,
        alt: "patatap thumbnail",
        p: "I was able to add another animation library to my arsenal. This one is paper.js. On every letter tap on the keyboard we can play a sound and add a simple graphic with some pretty simple code. It ultimately creates a cool effect that mimicks the famous Patatap website.",
        imageLink: "https://jeilani.github.io/Portfolio/Patatap.html",
        sourceCodeLink: "https://github.com/Jeilani/Patatap-Project"
},
    {
        index: 2,
        title: "Air Jordan Game",
        imgSrc: airjordanthumbnail,
        alt: "Michael Jordan's crying face",
        p: "Through the processing environment I was able to use object-oriented programming principles to allow a user to test the powers of air jordan himself to score as many points as possible while avoiding the blocking power of shaq in level 2. I also heavily utizilized the power of conditional statements in scene changes",
        imageLink: "https://jeilani.github.io/Portfolio/michaeljordanflappy.html",
        sourceCodeLink: "https://github.com/Jeilani/Portfolio/blob/master/michaeljordanflappy.js"
},
    {
        index: 3,
        title: "Random Generator",
        imgSrc: randomgeneratoricon,
        alt: "Thumbnail for Random Generator App",
        p: "Sometimes, randomness is good. Through processing, I was able to deliver a mountain range whose peaks and valleys are never repeated through code. If you want to deliver variety within a piece of content, it's possible. It's as simple as soft-coding your content with variables that have random values everytime you load.",
        imageLink: "https://jeilani.github.io/Portfolio/randomgenerator.html",
        sourceCodeLink: "https://github.com/Jeilani/Portfolio/blob/master/michaeljordanflappy.js"
},
    {
        index: 4,
        title: "Asteroid Game",
        imgSrc: asteroidthumbnail,
        alt: "Thumbnail for the Asteroid Game",
        p: "Although not the most visually striking animation, this minitiaure spaceship flying through space required strategic brainstorming. and an ability to combine math and code. I was able to tap deep enough into the principles of trigonometry and translate it into code. That combined with object oriented programming and conditional statements creates the rotating spaceship you see here. Check the source code and documentation to see.",
        imageLink: "https://jeilani.github.io/Portfolio/spaceship.html",
        sourceCodeLink: "https://github.com/Jeilani/Portfolio/blob/master/spaceship.js"
}
]


class ProcessingPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            whichProject: 0
        }
    }

    nextProjectSwitch = () => {
        if (this.state.whichProject === processingProjects.length - 1) {
            this.setState({
                whichProject: 0
            })

        } else {
            this.setState(prevState=>{
                return {
                whichProject: prevState.whichProject + 1
                }
            })
        }
    }

    prevProjectSwitch = () => {
        if (this.state.whichProject === 0) {

            this.setState({
                whichProject: processingProjects.length - 1
            })

        } else {
            this.setState(prevState=>{
                console.log(prevState.whichProject)
                return {
                whichProject: prevState.whichProject - 1
                }
            })
        }
    }

    render() {
        const indicators = processingProjects.map(project =>{
            if (project.index === this.state.whichProject){
                return (
                    <i className="indicators fas fa-circle"></i>
                )
            }
            return (
                    <i className="indicators far fa-circle"></i>
            )
        })
        const projectDivs = processingProjects.map(project =>{
            return (
                <div className="projectsection">
                    <div className="switcharrows">
                    <i onClick= {this.prevProjectSwitch}class="fas fa-long-arrow-alt-left"></i>
                        <div className="indicators">
                        {indicators}
                        </div>
                        <i onClick={this.nextProjectSwitch}class="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <h2>{project.title}</h2>
                    <a className="imagecontainer" href={project.imageLink} target="_blank" rel="noopener noreferrer"><img  className="projectimages" src = {project.imgSrc} alt={project.alt}></img></a>
                    <p>{project.p}</p>
                    <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer" id="sourcecodebutton">Source Code</a>
                </div>
            )
        })
        return (
            <div className= "pagerendered reactpage">
                {projectDivs[this.state.whichProject]}
            </div>
        )
    }
}

export default ProcessingPage