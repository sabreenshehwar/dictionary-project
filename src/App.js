import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="App">
      <div className="container" />
      <header className="App-header">
        <img src={logo} className="App-logo"
          alt="logo" className="logo-fluid" />
      </header>
      <br />
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          <a href="https://github.com/sabreenshehwar/dictionary-project" target="_blank" > open-source on github <br />
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
