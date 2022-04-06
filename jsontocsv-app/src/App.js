import logo from './logo.svg';
import React from 'react';
import './App.css';


function JSON(props) {
  // Object to paste JSON syntax into a text box
  // Return warning if box is empty or doesn't contain valid JSON
  /**
   * JSON FORMAT EXAMPLE:
   * {
   *  id: value,
   *  product: value,
   *  key: value
   * }
   *  */  

  let input = props.text.split(" ");
  
  let output = [];

  for (let i = 0; i < input.length; i++) {
    output.push(input[i])
  }

  console.log(output)

  // return (
  //   <div className="JSON">
  //     <textarea>
  //       {props.text}
  //     </textarea>
  //   </div>
  // );
}

class Convert extends React.Component {
  // Button Object to 'Convert' validate JSON text and convert to CSV
  constructor(props){
    super(props);
  }

  handleClick(i){
      <JSON text="test"></JSON>
  }

  render() {
    return(
      <div className='JSON'><textarea>{JSON.text}</textarea>
      <button onClick={(i) => this.handleClick(i)}>Convert</button>
      </div>
    )
  }
    

}

function CSV(props) {
  // Object to show converted CSV
  return (
    <div className="CSV">
      <textarea>
        {props.text}
      </textarea>
    </div>
  )
}

function Clear(props) {
  return (
    <button>Clear</button>
  )
}

class App extends React.Component {
  // -   [ ] User can click a 'Clear' button to clear the contents of both the JSON and CSV text boxes.
    render() {
      return(
          <div>
            <p>Work in Progress</p>
            <Convert/>
            <CSV/>
            <Clear/>
          </div>

      );
    }
}

        export default App;
