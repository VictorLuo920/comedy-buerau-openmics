import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() { 
    return (
    <>
    <div className="App">
      <header className="App-header">
      Project 4 Start
      </header>
      <Switch>
        <Route exact path='/' render={() => {return (<div>Home is Working</div>)}
        
        }/>
        <Route exact path='/signup' render={({ history }) => 
        { return (<div>Signup is Working</div>)}
            }/>
      </Switch>
    </div>
    </>
    );
  }
}

export default App;
