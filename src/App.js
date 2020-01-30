import React from 'react';
import NameComponent from "./components/NameComponent"
import AboutComponent from "./components/AboutComponent"
import ProjectsComponent from "./components/ProjectsComponent"
import ContactComponent from "./components/ContactComponent"

class App extends React.Component {
  constructor(){
    super()
      this.state = {
        pageRendered: "name"
      }
  }

  changeContent = content =>{
    this.setState({
      pageRendered: content
    })
  }

  renderContent = () =>{
    if (this.state.pageRendered === "name") {
      return (
        // <CSSTransition
        //   key={0}
        //   in={true}
        //   timeout={2500}
        //   classNames="example"
        // >
          <NameComponent />
        // {/* </CSSTransition> */}

      )
    } else if (this.state.pageRendered === "about") {
      return (
        // <CSSTransition
        // key={1}
        // in={true}
        // timeout={2500}
        // classNames="example">
          <AboutComponent />
        // {/* </CSSTransition> */}
      )
    } else if (this.state.pageRendered ==="projects") {
      return (
        // <CSSTransition
        // key={2}
        // in={true}
        // timeout={2500}
        // classNames="example">
          <ProjectsComponent />
        // </CSSTransition>
      )
    } else if (this.state.pageRendered ==="contact") {
      return (
        // <CSSTransition
        // key={3}
        // in={true}
        // timeout={2500}
        // classNames="example">
          <ContactComponent />
        // </CSSTransition>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <div className="githublink"><a href="http://www.github.com/jeilani" target="_blank" rel="noopener noreferrer">Github</a></div>
        <div className="optionscontainer">
          <h3 className = "navbar" onClick = {()=>{this.changeContent("name")}}>
            Home
          </h3>
          <h3 className = "navbar" onClick = {()=>{this.changeContent("about")}}>
            About
          </h3>

          <h3 className = "navbar" onClick = {()=>{this.changeContent("projects")}}>
            Projects
          </h3>

          <h3 className = "navbar" onClick = {()=>{this.changeContent("contact")}}>
            Contact
          </h3>
        </div>
        <div className="contentcontainer">

            {this.renderContent()}

        </div>
      </div>
    );
  }
}

export default App;
