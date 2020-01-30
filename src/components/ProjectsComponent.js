import React from "react"
import "../CSS/App.css"
import "../CSS/ProjectsComponent.css"
import ReactPage from "./ProjectsSubComponent/ReactPage.js"
import ProcessingPage from "./ProjectsSubComponent/ProcessingPage.js"
import JqueryPage from "./ProjectsSubComponent/JqueryPage.js"
import OtherFullStack from "./ProjectsSubComponent/OtherFullStack"

class ProjectsComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            options: true,
            projectpage: "selected"
         }
    }

    toggleOptions= () => {
        this.setState(prevState=>{
            return {
                options: !prevState.options
            }
        })
    }

    changePage = pageName =>{
        console.log(pageName)
        this.setState({
            options: false,
            projectpage: pageName
        })
    }

    renderOptions = () =>{
        if (this.state.options){
            return(
            <div className="Projects">
                <h1 id="R"onClick={()=>{this.changePage("react")}}>React</h1>
                <h1 id="O"onClick={()=>{this.changePage("otherpages")}}>Other Full Stack</h1>
                <h1 id="J"onClick={()=>{this.changePage("jquery")}}>JQuery</h1>
                <h1 id="P"onClick={()=>{this.changePage("processing")}}>Processing/Misc</h1>
            </div>
            )
        }
        else {
            if (this.state.projectpage === "react"){
                return (
                <ReactPage/>
                )

            } else if (this.state.projectpage ==="processing"){
                return(
                    <ProcessingPage/>
                )
            } else if (this.state.projectpage === "jquery"){
                return (
                    <JqueryPage/>
                )
            } else if (this.state.projectpage === "otherpages"){
                return (
                    <OtherFullStack />
                )
            }
        }
    }


    render(){
        return (
            <div className="slidein components projectscomponent">
                {!this.state.options ? <div id ="projecttitle" onClick={()=>{this.toggleOptions()}}>Back<i class="fas fa-arrow-circle-left"></i></div> : <div id="projecttitle">Projects</div>}
                {this.renderOptions()}
            </div>
        )
    }
}

export default ProjectsComponent