import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { Dashboard } from './components/Dashboard'
import { Display } from './components/Display'

function App() {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)

  useEffect(() => {
    if (strikes === 3 || balls === 4) {
      resetCount()
    }
  }, [balls, strikes])

  const resetCount = () => {
    setStrikes(0)
    setBalls(0)
  }

  const handleStrike = () => {
    setStrikes(strikes + 1)
  }

  const handleBall = () => {
    setBalls(balls + 1)
  }

  const handleFoul = () => {
    if (strikes < 2) setStrikes(strikes + 1)
  }

  return (
    <div>
      <Dashboard handleBall={handleBall} handleStrike={handleStrike} handleFoul={handleFoul} handleHit={resetCount} />
      <Display balls={balls} strikes={strikes} />
    </div>
  );
}

export default App;
