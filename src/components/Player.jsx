import React from 'react'
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import ActionIcon from './ActionIcon'

const Player = ({name = 'Player', score = 0, action="rock"}) => {
  return (
    <div className='player'>
        <div className="score">{`${name}: ${score}`}</div>
        <div className='action'>
          {action && <ActionIcon action={action} size={60} />}
        </div>    
    </div>
  )
}

export default Player