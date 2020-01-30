import React from "react"
import "../../CSS/ProjectsComponent.css"
import OrganizerScreenshot from "../../images/OrganizerScreenshot.png"
import TodoApi from "../../images/TodoAPI.png"

const reactProjects = [
    {
        index: 0,
        title: "Organizer App",
        imgSrc: OrganizerScreenshot,
        alt: "Organizer App",
        p: "Built an organizer app from scratch with no date picker libraries. The app was built using React on the front end and node, mongoose, express and mongo on the back end.",
        imageLink: "https://infinite-hamlet-27574.herokuapp.com/",
        sourceCodeLink: "https://github.com/Jeilani/OrganizerApp"
},
    {
        index: 1,
        title: "React Todo App",
        imgSrc: TodoApi,
        alt: "React Todo App",
        p: "Built this simple on the front end, challenging and fun on the backend with React on the front end and Express routes and MongoDB on the backend",
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