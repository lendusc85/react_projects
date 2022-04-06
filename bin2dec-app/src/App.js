import logo from './logo.svg';
import './App.css';



function App() {

  function handleSubmit(e) {
    e.preventDefault();
    let binary = parseInt(document.getElementById("binary").value);
    if (binary != NaN){
      let result = document.getElementById("binary").value;
      let r_result = []
      for (let i = result.length; i > 0; i--){
        let exponent = i - 1
        let equation = (2 ** exponent) * 1
        r_result.push(equation)
      }
      let answer = r_result.reduce(function(a, b){return a + b;},0)
      return document.getElementById("answer").innerHTML = answer;
    }
    else {
      return document.getElementById("answer").innerHTML = "Please Input a Number Only.";
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Binary to Decimal</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" id="binary" name="binary"></input>
          <br></br>
          <p id="answer"></p>
          <button type="submit" className="submit" value="Submit">Submit</button>
          
        </form>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
