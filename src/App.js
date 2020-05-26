import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import userService from './utils/userService';
import SignupPage from './pages/SignupPage/SignupPage'


class App extends Component {

  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() { 
    return (
    <>
    <div className="App">
      <header>
      Project 4 Start
      </header>
      <NavBar />
      <Switch>
        <Route exact path='/' render={() => {return (<div>Home is Working</div>)}
        
        }/>
         <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
      </Switch>
    </div>
    </>
    );
  }
}

export default App;
