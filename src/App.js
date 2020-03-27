import React,{Component} from 'react';
import About_me from './components/about-me.js';
import Experience from './components/experience.js';
import Education from './components/education.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import Contact_me from './components/contact-me.js';
import 'bootstrap/dist/css/bootstrap.css';
import './components/stylesheets/reset.css';
import './fonts/fontface.css';
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
      initial: 0,
      l0: "#98003F",
      l1: "#5E0047",
      l2: "#5E0047",
      l3: "#5E0047",
      l4: "#5E0047",
      l5: "#5E0047",
    }
  }
  handleClick(){
    this.setState({
      initial:0,
      l0: "#98003F",
      l1: "#5E0047",
      l2: "#5E0047",
      l3: "#5E0047",
      l4: "#5E0047",
      l5: "#5E0047",
    })
  }
  handleClick1(){
    this.setState({
      initial:1,
      l0: "#5E0047",
      l1: "#98003F",
      l2: "#5E0047",
      l3: "#5E0047",
      l4: "#5E0047",
      l5: "#5E0047",
    })
  }  handleClick2(){
    this.setState({
      initial:2,
      l0: "#5E0047",
      l1: "#5E0047",
      l2: "#98003F",
      l3: "#5E0047",
      l4: "#5E0047",
      l5: "#5E0047",
    })
  }  handleClick3(){
    this.setState({
      initial:3,
      l0: "#5E0047",
      l1: "#5E0047",
      l2: "#5E0047",
      l3: "#98003F",
      l4: "#5E0047",
      l5: "#5E0047",
    })
  }  handleClick4(){
    this.setState({
      initial:4,
      l0: "#5E0047",
      l1: "#5E0047",
      l2: "#5E0047",
      l3: "#5E0047",
      l4: "#98003F",
      l5: "#5E0047",
    })
  }  handleClick5(){
    this.setState({
      initial:5,
      l0: "#5E0047",
      l1: "#5E0047",
      l2: "#5E0047",
      l3: "#5E0047",
      l4: "#5E0047",
      l5: "#98003F",
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
        <div className="nav-list col-2 px-0 my-5">
          <div onClick={this.handleClick} style={{backgroundColor: this.state.l0}} className="single-nav my-5 pl-3 d-flex align-items-center">About Me</div>
          <div onClick={this.handleClick1} style={{backgroundColor: this.state.l1}} className="single-nav my-5 pl-3 d-flex align-items-center">Experience</div>  
          <div onClick={this.handleClick2} style={{backgroundColor: this.state.l2}} className="single-nav my-5 pl-3 d-flex align-items-center">Education</div>  
          <div onClick={this.handleClick3} style={{backgroundColor: this.state.l3}} className="single-nav my-5 pl-3 d-flex align-items-center">Skills</div>
          <div onClick={this.handleClick4} style={{backgroundColor: this.state.l4}} className="single-nav my-5 pl-3 d-flex align-items-center">Projects</div>  
          <div onClick={this.handleClick5} style={{backgroundColor: this.state.l5}} className="single-nav my-5 pl-3 d-flex align-items-center">Contact Me</div>  
        </div>
        <div className="display col-10 p-4">
          {this.renderElement()}
        </div>
      </div>
    )
  }
}
