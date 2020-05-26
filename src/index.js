import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import LeftNav from './components/leftComponents/leftNav'
import AboutMe from './components/about-me.js';
import Experience from './components/experience.js';
import Education from './components/education.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import ContactMe from './components/contact-me.js';  
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
  render(){
    return(
      <div className="page-wrapper d-flex">
        <LeftNav active ={this.state.initial}
                 handleClick = {this.handleClick} 
                 handleClick1 = {this.handleClick1} 
                 handleClick2 = {this.handleClick2} 
                 handleClick3 = {this.handleClick3} 
                 handleClick4 = {this.handleClick4} 
                 handleClick5 = {this.handleClick5} />
        <div className="display col-lg-10 col-12 p-4">
          {
            this.state.initial === 0 ?
              <AboutMe />
              :
              this.state.initial === 1 ?
                <Experience />
                :
                this.state.initial === 2 ?
                  <Education />
                  :
                  this.state.initial === 3 ?
                    <Skills />
                    :
                    this.state.initial === 4 ?
                      <Projects />
                      :
                      this.state.initial === 5 &&
                        <ContactMe />
          }
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