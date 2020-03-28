import React,{Component} from 'react';
import ReactWOW from 'react-wow'
import display_image from './images/dp.png';
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
      l0: "black",
      l1: "#fff",
      l2: "#fff",
      l3: "#fff",
      l4: "#fff",
      l5: "#fff",
      c0: "#fff",
      c1: "black",
      c2: "black",
      c3: "black",
      c4: "black",
      c5: "black",
    }
  }
  handleClick(){
    this.setState({
      initial:0,
      l0: "black",
      l1: "#fff",
      l2: "#fff",
      l3: "#fff",
      l4: "#fff",
      l5: "#fff",
      c0: "#fff",
      c1: "black",
      c2: "black",
      c3: "black",
      c4: "black",
      c5: "black",
    })
  }
  handleClick1(){
    this.setState({
      initial:1,
      l0: "#fff",
      l1: "black",
      l2: "#fff",
      l3: "#fff",
      l4: "#fff",
      l5: "#fff",
      c0: "black",
      c1: "#fff",
      c2: "black",
      c3: "black",
      c4: "black",
      c5: "black",
    })
  }  handleClick2(){
    this.setState({
      initial:2,
      l0: "#fff",
      l1: "#fff",
      l2: "black",
      l3: "#fff",
      l4: "#fff",
      l5: "#fff",
      c0: "black",
      c1: "black",
      c2: "#fff",
      c3: "black",
      c4: "black",
      c5: "black",
    })
  }  handleClick3(){
    this.setState({
      initial:3,
      l0: "#fff",
      l1: "#fff",
      l2: "#fff",
      l3: "black",
      l4: "#fff",
      l5: "#fff",
      c0: "black",
      c1: "black",
      c2: "black",
      c3: "#fff",
      c4: "black",
      c5: "black",
    })
  }  handleClick4(){
    this.setState({
      initial:4,
      l0: "#fff",
      l1: "#fff",
      l2: "#fff",
      l3: "#fff",
      l4: "black",
      l5: "#fff",
      c0: "black",
      c1: "black",
      c2: "black",
      c3: "black",
      c4: "#fff",
      c5: "black",
    })
  }  handleClick5(){
    this.setState({
      initial:5,
      l0: "#fff",
      l1: "#fff",
      l2: "#fff",
      l3: "#fff",
      l4: "#fff",
      l5: "black",
      c0: "black",
      c1: "black",
      c2: "black",
      c3: "black",
      c4: "black",
      c5: "#fff",
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

        <div className="left-section col-2 px-0">

          <ReactWOW animation ='bounceInUp'>
            <div className="intro d-flex flex-column align-items-center pt-3">
              <figure>
                <img src={display_image} ></img>
              </figure>
              <h2 class="mb-0">Sankshit Pandoh</h2>
              <p>"If you can't blow them with your brilliance, baffle them with your bullshit."</p>
            </div>
          </ReactWOW>

          <div class="nav-list my-3">
            <ReactWOW animation="bounceInUp" delay='0.5s'>
              <div onClick={this.handleClick} style={{backgroundColor: this.state.l0, color: this.state.c0}} className="single-nav mb-2 pl-3 d-flex align-items-center">About Me</div>
            </ReactWOW>
            <ReactWOW animation="bounceInUp" delay='0.7s'>
              <div onClick={this.handleClick1} style={{backgroundColor: this.state.l1, color: this.state.c1}} className="single-nav mb-2 pl-3 d-flex align-items-center">Experience</div>  
            </ReactWOW>
            <ReactWOW animation="bounceInUp" delay='0.9s'>
              <div onClick={this.handleClick2} style={{backgroundColor: this.state.l2, color: this.state.c2}} className="single-nav mb-2 pl-3 d-flex align-items-center">Education</div>
            </ReactWOW>
            <ReactWOW animation="bounceInUp" delay='1.1s'>
              <div onClick={this.handleClick3} style={{backgroundColor: this.state.l3, color: this.state.c3}} className="single-nav mb-2 pl-3 d-flex align-items-center">Skills</div>
            </ReactWOW>
            <ReactWOW animation="bounceInUp" delay='1.3s'>
              <div onClick={this.handleClick4} style={{backgroundColor: this.state.l4, color: this.state.c4}} className="single-nav mb-2 pl-3 d-flex align-items-center">Projects</div> 
            </ReactWOW>
            <ReactWOW animation="bounceInUp" delay='1.5s'>
              <div onClick={this.handleClick5} style={{backgroundColor: this.state.l5, color: this.state.c5}} className="single-nav mb-2 pl-3 d-flex align-items-center">Contact Me</div>
            </ReactWOW>  
          </div>

        </div>

        <div className="display col-10 p-4">
          {this.renderElement()}
        </div>
        
      </div>
    )
  }
}
