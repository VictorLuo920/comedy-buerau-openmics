import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import userService from './utils/userService';
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import EventsIndexPage from './pages/EventsIndexPage/EventsIndexPage'


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

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  render() { 
    return (
    <>
    <div className="App">
      <header>
      Project 4 Start
      </header>
      <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
      <Switch>
        <Route exact path='/' render={() => 
          <EventsIndexPage />
        }/>
        <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
        }/>
        <Route exact path='/login' render={({ history }) => 
            <LoginPage
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
