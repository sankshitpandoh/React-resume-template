import React from 'react';

function SingleSkill(props){
    const skills = props.skillList.map((x, index) => {
        return <div className="col-lg-3 col-6 col-md-6 my-5 single-skill" key={index}>
                    <h3 className="mb-2">{props.skillList[index].skillName}</h3>
                    <div className="progress">
                        <div className="progress-bar" style={{width: `${props.skillList[index].skillLevel}`}}></div>
                    </div>
                </div>
    })
    return(
        <div className="row">
        {skills}
        </div>
    )
}

export default SingleSkill;