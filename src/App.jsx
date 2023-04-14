import { useState } from 'react'
import Player from './components/Player'
import ActionButton from './components/ActionButton'
import GetWinner from './components/GetWinner'
import './App.css'

function App() {
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [playerAction, setPlayerAction] = useState('')
  const [computerAction, setComputerAction] = useState('')
  const [winner, setWinner] = useState('')
  const [round, setRound] = useState(0)

  const actions = {
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    rock: ['scissors', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock'],
  };
  
  const randomAction = () => {
    const actionsArray = Object.keys(actions);
    const randomIndex = Math.floor(Math.random() * actionsArray.length);
    return actionsArray[randomIndex];
  }

  const onActionSelected = (selectedAction) => {
    setPlayerAction(selectedAction);
    const computerSelectedAction = randomAction();
    setComputerAction(computerSelectedAction);
    const newWinner = calculateWinner(selectedAction, computerSelectedAction);
    setWinner(newWinner);
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
    }
    if (newWinner === 1) {
      setComputerScore(computerScore + 1);
    }
    setRound(round + 1);
  }

  const calculateWinner = (playerAction, computerAction) => {
    if (playerAction === computerAction) {
      return 0;
    } else if (actions[playerAction].includes(computerAction)) {
      return -1;
    } else if (actions[computerAction].includes(playerAction)) {
      return 1;
    }
    return null;
  }

  

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div>
        <div className='container'>
            <Player name='Player' score={playerScore} action={playerAction} />
            <Player name='Computer' score={computerScore} action={computerAction} />
        </div>
        <div>
          <ActionButton action='rock' onActionSelected={onActionSelected} />
          <ActionButton action='paper' onActionSelected={onActionSelected} />
          <ActionButton action='scissors' onActionSelected={onActionSelected} />
          <ActionButton action='lizard' onActionSelected={onActionSelected} />
          <ActionButton action='spock' onActionSelected={onActionSelected} />

        </div>
        <GetWinner winner={winner} />
      </div>
    </div>
  )
}

export default App
