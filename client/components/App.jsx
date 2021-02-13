import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchFruits } from '../actions'

import { BowlingScoreCard } from './BowlingScoreCard'
export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    this.props.dispatch(fetchFruits())
  }

  render () {
    return (
      <div className='app'>
        <h1>React Bowling!</h1>
        <div>
          <Switch>
            <Route exact path="/" component={BowlingScoreCard} />
          </Switch>
        </div>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
