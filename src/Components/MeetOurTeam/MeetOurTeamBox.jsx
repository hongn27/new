import React from 'react'

const MeetOurTeamBox = ({title, description}) => {
  return (
    <div className='box-text'>
        <div>
            <h4>{title} </h4>
        </div>
        <div>
            <p>{description} </p>
        </div>
    </div>
  )
}

export default MeetOurTeamBox