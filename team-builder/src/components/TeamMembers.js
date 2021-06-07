import React from 'react';
function TeamMembers (props) {
    const {details} = props


    return(
        <div className= 'container'>
            <h3>{details.name}</h3>
            <p>Position:{details.position}</p>
            <p>E-mail: {details.email}</p>
            <p>Campus: {details.campis}</p>
        </div>
    )
}

export default TeamMembers
