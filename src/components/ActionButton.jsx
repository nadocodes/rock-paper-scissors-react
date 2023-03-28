import React from 'react'
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import ActionIcon from './ActionIcon'

const ActionButton = ({action = 'rock', onActionSelected}) => {
  return (
    <button className='rounded-btn' onClick={() => onActionSelected(action)} >
        <ActionIcon action={action} size={20} />
    </button>
  )
}

export default ActionButton