import React from "react"
import "../../CSS/ProjectsComponent.css"
import TodoImage from "../../images/todolistthumbnail.png"

const jqueryProjects = [
    {
        index: 0,
        title: "jQuery Todo List",
        imgSrc: TodoImage,
        alt: "Screenshot of Todo list made in jquery",
        p: "This todo list app utilizes JavaScript and jQuery to implement several bits of functionality that allows one to add and delete things off the todo list.",
        imageLink: "https://jeilani.github.io/oldportfolio/todolist.html",
        sourceCodeLink: "https://github.com/Jeilani/oldportfolio/blob/master/todolist.html"
}
]


class JqueryPage extends React.Component {
    constructor(){
        super()
        this.state = {
            whichProject: 0
        }
    }

    nextProjectSwitch = () => {
        if (this.state.whichProject === jqueryProjects.length - 1) {
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
                whichProject: jqueryProjects.length - 1
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

    render(){
        const indicators = jqueryProjects.map(project =>{
            if (project.index === this.state.whichProject){
                return (
                    <i className="indicators fas fa-circle"></i>
                )
            }
            return (
                    <i className="indicators far fa-circle"></i>
            )
        })
        const projectDivs = jqueryProjects.map(project =>{
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
            <div className="pagerendered">
            <div className= "pagerendered reactpage">
                {projectDivs[this.state.whichProject]}
            </div>
            </div>
        )
    }

}

export default JqueryPage