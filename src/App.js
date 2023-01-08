import React, { useState } from 'react';
import './App.css';
import Logo from './Logo';
import LearnReactLink from './LearnReactLink';

function App() {
  const[count, setCount] = useState(0);
  const[email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for subscribing with email: ${email}");
  }
  return (
    <div className="App">
      <header className="App-header">
      <Logo src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <LearnReactLink
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </LearnReactLink>
        </p>
        <p>You clicked the button {count} times</p>
        <button onClick={()=> setCount(count+1)}>click me</button>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleChange} />
          </label>
          <button type="submit">
            Subscribe
          </button>

        </form>
      </header>
    </div>
  );
}

export default App;
