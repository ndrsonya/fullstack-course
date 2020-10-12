import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ handeClick, text }) => {
  return (
    <button onClick={handeClick}>{text}</button>
  )
}

const Statistic = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = (props) => {

  return (
    <div>

      <Statistic text="good" value={props.goodFeedback} />
      <Statistic text="neutral" value={props.neutralFeedback} />
      <Statistic text="bad" value={props.badFeedback} />
      <Statistic text="all" value={props.allFeedback} />
      <Statistic text="average" value={props.averageFeedback} />
      <Statistic text="positive" value={props.positiveFeedback} />


    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>

      <div>
        <Button handeClick={() => setGood(good + 1)} text={"good"} />
        <Button handeClick={() => setNeutral(neutral + 1)} text={"neutral"} />
        <Button handeClick={() => setBad(bad + 1)} text={"bad"} />
      </div>
      <h2>statistics</h2>
      {
        good || neutral || bad ?
          <Statistics
            goodFeedback={good} neutralFeedback={neutral} badFeedback={bad}
            allFeedback={good + bad + neutral}
            averageFeedback={(good + bad * (-1) + (neutral * 0)) / (good + bad + neutral)}
            positiveFeedback={good / (good + bad + neutral) * 100}
          /> : <p>no feedback received</p>

      }

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)