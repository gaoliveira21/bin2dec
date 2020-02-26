import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {

  const [binaryText, setBinaryText] = useState('')
  const [decimalText, setDecimalText] = useState('')
  const [error, setError] = useState('')

  function onFormSubmit(e) {
    e.preventDefault()

    if (!binaryText.match(/^[0-1]+$/g)) {
      setError("Enter only 0 or 1")
      return
    }

    setError("")

    const reverseBinary = binaryText.split('').map(digit => Number(digit)).reverse()

    const decimal = reverseBinary.reduce((accumulator, currentValue, index) => {
      return accumulator + currentValue * Math.pow(2, index)
    })

    setDecimalText(decimal)

  }


  return (
    <div className="container">
      <h1>Binary to Decimal converter</h1>
      <form onSubmit={onFormSubmit}>
        <div className="input-field">
          <label htmlFor="binaryInput">Binary input</label>
          <input
            type="text"
            name="binary"
            id="binaryInput"
            placeholder="Enter 0 or 1"
            value={binaryText}
            onChange={e => setBinaryText(e.target.value)}
          />
          <small>{error}</small>
        </div>
        <input type="submit" value="Converter" />
      </form>

      <div className="decimal-output">
        <p>Decimal output</p>
        <div>{decimalText}</div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

