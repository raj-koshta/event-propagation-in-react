import React from 'react'
import './App.css'
import EventPropagation from './EventPropagation'

function App() {

  return (
    <>
      <h1>Event Propagation in React</h1>
      <div className="card">
        <EventPropagation />
        <p>
          <br />
          <br />
          <br />
          <hr />
        </p>
      </div>
    </>
  )
}

export default App