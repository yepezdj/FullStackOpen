import logo from "./logo.svg";
import "./App.css";

function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Greetings</h1>
          <Hello />
          <Hello />
          <Hello />
          <p>
            {a} plus {b} is {a + b}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>
        <p>Hello world</p>
      </div>
    </>
  );
}

const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};
export default App;
