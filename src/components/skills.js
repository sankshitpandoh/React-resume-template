import React from 'react';
import SingleSkill from './singleSkill';
import './stylesheets/skills.css';

const skillList = [ {"skillName" : "ReactJs", "skillLevel" : "85%"}, {"skillName" : "React Native", "skillLevel" : "80%"}, {"skillName" : "JavaScript", "skillLevel" : "90%"},{"skillName" : "HTML5", "skillLevel" : "95%"},
                    {"skillName" : "CSS3", "skillLevel" : "90%"} ,{"skillName" : "NodeJs", "skillLevel" : "80%"}, {"skillName" : "Express.js", "skillLevel" : "70%"}, {"skillName" : "Socket.io", "skillLevel" : "90%"}, 
                    {"skillName" : "SAAS", "skillLevel" : "50%"}, {"skillName" : "Bootstrap 4", "skillLevel" : "90%"},{"skillName" : "Git", "skillLevel" : "70%"}, {"skillName" : "PhotoShop", "skillLevel" : "70%"}, 
                    {"skillName" : "php", "skillLevel" : "50%"},{"skillName" : "MySQL", "skillLevel" : "45%"}, {"skillName" : "C++", "skillLevel" : "65%"}, {"skillName" : "Python", "skillLevel" : "50%"}];

export default function Skills(){
    return(
        <div className="container">
                <SingleSkill skillList = {skillList} />
        </div>
    )
}