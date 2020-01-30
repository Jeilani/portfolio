import React from "react"
import "../../CSS/ProjectsComponent.css"
import YelpCampScreenshot from "../../images/YelpCampScreenshot.png"

const otherfullstackProjects = [
    {
        index: 0,
        title: "YelpCamp Project",
        imgSrc: YelpCampScreenshot,
        alt: "Landing Page of Yelp Camp Project",
        p: "I built this alongside Colt Steele in the Web Developers bootcamp. This is a node web app with restful routing, authentication, authorization, with post and comment functionality.",
        imageLink: "https://whispering-badlands-59999.herokuapp.com/",
        sourceCodeLink: "https://github.com/Jeilani/YelpCamp-V12-Deploy"
}
]

class OtherFullStack extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            whichProject: 0
         }
    }

    nextProjectSwitch = () => {
        if (this.state.whichProject === otherfullstackProjects.length - 1) {
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
                whichProject: otherfullstackProjects.length - 1
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
        const indicators = otherfullstackProjects.map(project =>{
            if (project.index === this.state.whichProject){
                return (
                    <i className="indicators fas fa-circle"></i>
                )
            }
            return (
                    <i className="indicators far fa-circle"></i>
            )
        })
        const projectDivs = otherfullstackProjects.map(project =>{
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
                            <div className="pagerendered">
            <div className= "pagerendered reactpage">
                {projectDivs[this.state.whichProject]}
            </div>
            </div>
            </div>
        )
    }
}

export default OtherFullStack