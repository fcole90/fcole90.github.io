import React from 'react';
import logo from './assets/images/logo.png';
import './App.css';

function appLink(text, url){
  return (<a className="App-link" href={url}>{text}</a>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Fabio Colella</p>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          I'm creating a new website...
        </p>
        <p>
          Meanwhile:
          <ul>
            <li>{appLink("Follow me on Twitter", "https://twitter.com/fcole90")}</li>
            <li>{appLink("Connect on LinkedIn", "https://www.linkedin.com/in/fabio-colella-099858162/")}</li>
            <li>{appLink("Check my GitHub", "https://github.com/fcole90")}</li>
          </ul>
        </p>

        <p>Version 0.0.6</p>
      </header>
    </div>
  );
}

export default App;
