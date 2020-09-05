import React from 'react';
import './App.css';
// import "./index.css";
import GithubSearchApp from "./components/GithubSearchApp";

class App extends React.Component{
  constructor(props) {
      super(props)
  
      this.state = {
           
      }
  }
  
    render() {
        return (
            <div className="App">
                {/* <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className='navbar-brand'>Github Profile Search App</a>
                </nav> */}

                <GithubSearchApp/>
            </div>
        );
    }

}
export default App;
