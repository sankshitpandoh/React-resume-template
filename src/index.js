import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import LeftNav from './components/leftNav'
import About_me from './components/about-me.js';
import Experience from './components/experience.js';
import Education from './components/education.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import Contact_me from './components/contact-me.js';  
import 'bootstrap/dist/css/bootstrap.css';
import './components/stylesheets/reset.css';
import './fonts/fontface.css';
import './index.css';

export default class App extends Component{
  state={
    initial: 0,
  }

  handleClick = () => {
    this.setState({
      initial:0,
    })
  }
  handleClick1 = () => {
    this.setState({
      initial:1,
    })
  }  
  handleClick2 = () => {
    this.setState({
      initial:2,
    })
  } 
   handleClick3 = () => {
    this.setState({
      initial:3,
    })
  }  
  handleClick4 = () => {
    this.setState({
      initial:4,
    })
  }  
  handleClick5 = () => {
    this.setState({
      initial:5,
    })
  }
  renderElement(){
    if(this.state.initial === 0){
      return(
        <About_me />
      )
    }
    if(this.state.initial === 1){
      return(
        <Experience />
      )
    }
    if(this.state.initial === 2){
      return(
        <Education />
      )
    }
    if(this.state.initial === 3){
      return(
        <Skills />
      )
    }
    if(this.state.initial === 4){
      return(
        <Projects />
      )
    }
    if(this.state.initial === 5){
      return(
        <Contact_me />
      )
    }
  }
  render(){
    return(
      <div className="page-wrapper d-flex">
        <LeftNav state ={this.state}
                 handleClick = {this.handleClick} 
                 handleClick1 = {this.handleClick1} 
                 handleClick2 = {this.handleClick2} 
                 handleClick3 = {this.handleClick3} 
                 handleClick4 = {this.handleClick4} 
                 handleClick5 = {this.handleClick5} />
        <div className="display col-lg-10 col-12 p-4">
          {this.renderElement()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);