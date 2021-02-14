import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BowlingScoreCard from './BowlingScoreCard'

function App () {
  return (
    <div className='app'>
      <h1>React Bowling!</h1>
      <div>
        <Switch>
          <Route path="/" component={BowlingScoreCard} />
        </Switch>
      </div>
    </div>
  )
}

export default App
