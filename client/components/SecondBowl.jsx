import React from 'react'

function SecondBowl ({ ballTwo, handleChange }) {
  return (
    <label>
      Ball Two:
      <input
        type='number'
        value={ballTwo}
        name='ballTwo'
        onChange={handleChange}
      />
    </label>
  )
}

export default SecondBowl
