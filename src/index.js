import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Binary to Decimal converter</h1>
      <form>
        <div className="input-field">
          <label htmlFor="binaryInput">Binary input</label>
          <input type="text" name="binary" id="binaryInput" placeholder="Enter 0 or 1"/>
        </div>
        <input type="submit" value="Converter" />
      </form>

      <div className="decimal-output">
        <p>Decimal output</p>
        <div>00000</div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

