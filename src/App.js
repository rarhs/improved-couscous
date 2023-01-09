import React, { useState } from 'react';
import './App.css';
import Logo from './Logo';
import LearnReactLink from './LearnReactLink';
import Counter from './Counter';
import EmailForm from './EmailForm';

function App() {
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
        <Counter />
        <EmailForm />
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
      </header>
    </div>
  );
}

export default App;
