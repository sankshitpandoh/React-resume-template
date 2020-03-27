import React,{Component} from 'react';
import About_me from './components/about-me.js';
import Experience from './components/experience.js';
import Education from './components/education.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import Contact_me from './components/contact-me.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.handleClick4 = this.handleClick4.bind(this)
    this.handleClick5 = this.handleClick5.bind(this)
    this.state={
      initial: 0
    }
  }
  handleClick(){
    this.setState({
      initial:0
    })
  }
  handleClick1(){
    this.setState({
      initial:1
    })
  }  handleClick2(){
    this.setState({
      initial:2
    })
  }  handleClick3(){
    this.setState({
      initial:3
    })
  }  handleClick4(){
    this.setState({
      initial:4
    })
  }  handleClick5(){
    this.setState({
      initial:5
    })
  }
  renderElement(){
    if(this.state.initial == 0){
      return(
        <About_me />
      )
    }
    if(this.state.initial == 1){
      return(
        <Experience />
      )
    }
    if(this.state.initial == 2){
      return(
        <Education />
      )
    }
    if(this.state.initial == 3){
      return(
        <Skills />
      )
    }
    if(this.state.initial == 4){
      return(
        <Projects />
      )
    }
    if(this.state.initial == 5){
      return(
        <Contact_me />
      )
    }
  }
  render(){
    return(
      <div className="row page-wrapper">
        <div className="nav-list col-2 my-5">
          <div onClick={this.handleClick} className="single-nav my-5 pl-3">About Me</div>
          <div onClick={this.handleClick1} className="single-nav my-5 pl-3">Experience</div>  
          <div onClick={this.handleClick2} className="single-nav my-5 pl-3">Education</div>  
          <div onClick={this.handleClick3} className="single-nav my-5 pl-3">Skills</div>
          <div onClick={this.handleClick4} className="single-nav my-5 pl-3">Projects</div>  
          <div onClick={this.handleClick5} className="single-nav my-5 pl-3">Contact Me</div>  
        </div>
        <div className="display col-10">
          {this.renderElement()}
        </div>
      </div>
    )
  }
}
