import React, { useState } from 'react'

import SecondBowl from './SecondBowl.jsx'

function BowlingScoreCard (props) {
  const [ballValue, setBallValue] = useState({ ballOne: undefined, ballTwo: undefined })

  const { ballOne, ballTwo } = ballValue
  function handleChange (evt) {
    setBallValue({
      ...ballValue,
      [evt.target.name]: evt.target.value
    })
  }

  const remainder = 10 - ballOne

  return (
    <>
      <form>
        <h3>Round One:</h3>
        <label>
          Ball One:
          <input
            type='number'
            value={ballOne}
            name='ballOne'
            onChange={handleChange}
            min='0'
            max='10'
          />
        </label>
        {(Number(ballOne) + Number(ballTwo)) > 10
          ? <h4>This score should be {remainder} or lower</h4>
          : null }
        {ballOne < 10
          ? <SecondBowl ballTwo={ballTwo} handleChange={handleChange}/>
          : null }
      </form>
    </>
  )
}

export default BowlingScoreCard
