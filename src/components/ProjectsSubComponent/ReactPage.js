import React from "react"
import "../../CSS/ProjectsComponent.css"
import playTimeScreenshot from "../../images/playTimeScreenshot.png"
import OrganizerScreenshot from "../../images/OrganizerScreenshot.png"
import TodoApi from "../../images/TodoAPI.png"
import CityConnectImage from "../../images/CityConnectImage.png"

const reactProjects = [    {
    index: 0,
    title: "playTime",
    imgSrc: playTimeScreenshot,
    alt: "playTime",
    p: "Built the front end for a social media app that allows users to set up activites on map. This was seat up using React, React Google Maps, Redux, React Router and React Hooks.",
    imageLink: "https://jeilani.github.io/playTimee",
    sourceCodeLink: "https://github.com/Jeilani/playTime"
},
{
    index: 1,
    title: "CityFinder",
    imgSrc: CityConnectImage,
    alt: "CityFinderApp",
    p: "Built a React app that implements Google Maps Javascript API and uses a React package called react google places to  implement search functionality. Currently working on setting up the node server to have this functioning on the backend too.",
    imageLink: "https://cityconnectjeilani.netlify.app/",
    sourceCodeLink: "https://github.com/Jeilani/CityFinder"
},
    {
        index: 2,
        title: "Organizer App",
        imgSrc: OrganizerScreenshot,
        alt: "Organizer App",
        p: "Built an organizer app from scratch with no date picker libraries. The app was built using React on the front end and node, mongoose, express and mongo on the back end.",
        imageLink: "https://infinite-hamlet-27574.herokuapp.com/",
        sourceCodeLink: "https://github.com/Jeilani/OrganizerApp"
},
    {
        index: 3,
        title: "React Todo App",
        imgSrc: TodoApi,
        alt: "React Todo App",
        p: "In this project, I used React state to render a new list everytime a fetch responded with a new todo item. The routes were constructed with express and I used mongoose to interact with the MongoDB. The app is going to be deployed with a new live link soon!",
        imageLink: "https://murmuring-citadel-48523.herokuapp.com/",
        sourceCodeLink: "https://github.com/Jeilani/fullstacktodoapp"
}
]

class ReactPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            whichProject: 0
        }
    }

    nextProjectSwitch = () => {
        if (this.state.whichProject === reactProjects.length - 1) {
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
                whichProject: reactProjects.length - 1
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

    render () {
        const indicators = reactProjects.map(project =>{
            if (project.index === this.state.whichProject){
                return (
                    <i className="indicators fas fa-circle"></i>
                )
            }
            return (
                    <i className="indicators far fa-circle"></i>
            )
        })
        const projectDivs = reactProjects.map(project =>{
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


        return(
            <div className= "pagerendered reactpage">
                {projectDivs[this.state.whichProject]}
            </div>
        )
    }
}

export default ReactPage