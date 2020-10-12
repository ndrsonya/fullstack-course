import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([1, 2, 3, 4, 5, 6]);
  const [mostVotedAnecdote, setMostVotedAnecdot] = useState('');


  const chooseRandomNumber = () => {
    setSelected(Math.floor(Math.random() * Math.floor(6)))
  }

  const vote = () => {
    let copy = [...votes]
    copy[selected] += 1;
    setVotes(copy);
  }

  const isMax = (num) => num == Math.max(...votes);

  return (
    <div>
      <h2>Andecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>{votes[selected]}</p>
      <button onClick={vote}>vote</button>
      <button onClick={chooseRandomNumber}>next anecdote</button>
      <h2>Anecdote with most wotes</h2>
      <p>{props.anecdotes[votes.findIndex(isMax)]}</p>
      <p>has {Math.max(...votes)} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)