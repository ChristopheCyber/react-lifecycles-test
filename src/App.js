import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Lifecycles from "./lifecycles.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showChild: true,
      text: "",
    };
  }
  render() {
    //Customized shorthand 'cl'
    const cl = console.log;
    cl('dans render');
    return (
      <div className="App">
        <header className="App-header">
          <h4>
            {" "} &lt; 
            Test Component Life-Cycles on local branch master-lifecycles &gt; {" "}
          </h4>
          <img src={logo} className="App-logo" alt="logo" />
          <button
            // onClick={() =>(
            onClick={() =>
              this.setState({ showChild: !this.state.showChild }, () =>
                cl("Toggle Clicked!")
              )
            }
          >
            Toggle Lifecycles
          </button>
          <button
            onClick={() =>
              this.setState((state2) => ({
                text: state2.text + "_hello",
              }))
            }
          >
            Update Text
          </button>
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
