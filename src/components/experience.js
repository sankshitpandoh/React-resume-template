import React,{Component} from 'react'
import ReactWOW from 'react-wow';
import './stylesheets/reset.css';
import './stylesheets/experience.css';

export default function Experience(){
    return(
        <div className="container">
            <div className="exp-cont d-flex">

          <ReactWOW animation ='bounceInUp' >
            <div className="col-lg-4 col-12">
                <div className="single-experience first d-flex flex-column">
                    <h2>FrontEnd Developer</h2>
                    <h2><span>Uplers - Global MarTech Agency</span></h2>
                    <h4>Jan,2020 - Present</h4>
                    <p>
                        More details later
                    </p>
                </div>
            </div>
        </ReactWOW>

        <ReactWOW animation ="bounceInUp" delay='0.5s'>
            <div className="col-lg-4 col-12">
                <div className="single-experience second d-flex flex-column">
                    <h2>React Developer</h2>
                    <h2><span>SportVot - Digital Sports Streaming Service</span></h2>
                    <h4>June,2019 - Nov,2019</h4>
                    <p>
                    "Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding. Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie chocolate bar jujubes toffee."
                    </p>
                </div>
            </div>
            </ReactWOW>

        <ReactWOW animation ="bounceInUp" delay='1s'>
                <div className="col-lg-4 col-12 d-flex flex-column">
                    <div className="single-experience third">
                        <h2>Graphics Head</h2>
                        <h2><span>Jharokha- Literature club of PDPU</span></h2>
                        <h4>Aug,2017 - May,2019</h4>
                        <p>
                        "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit. Nizzle sapien velizzle, bling bling volutpat, suscipit , gravida vel, arcu. Check it out hizzle that's the shizzle. We gonna chung erizzle. Fo izzle dolor fo turpis tempizzle tempor. Gangsta boom shackalack mofo et turpizzle. Sizzle izzle tortor. Pellentesque uhuh ... yih!"
                        </p>
                    </div>
                </div>
                </ReactWOW>
            </div>

        </div>
    )
}