import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import userService from './utils/userService';
import eventsService from './utils/eventsService'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import EventsIndexPage from './pages/EventsIndexPage/EventsIndexPage'
import EventCreatePage from './pages/EventCreatePage/EventCreatePage'
import EventDetailPage from './pages/EventDetailPage/EventDetailPage';


class App extends Component {

  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      events: [],
      user: userService.getUser()
    };
  }

  getEvent = (idx) => {
    return this.state.events[idx];
  }

  async componentDidMount() {
    const events = await eventsService.index();
    this.setState({ events: events });
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
      <header className="App-header">
      The Comedy Bureau App
      </header>
      <br></br>
      <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
      <Switch>
        <Route exact path='/' render={() => 
          {
            const eventRows = this.state.events.map((event, idx) => (
            
               <Link to={`/events/${idx}`} key={event.name}>{event.name}</Link>
             
            ));
          
            return (
              <div>
                <header className='App-title'>Open Mic Events</header>
                <section>
                {eventRows}
                </section>
              </div>
            );
          }
        }/>
        <Route path='/events/:idx' render={(props, history) => 
            <EventDetailPage
              {...props}
              history={history}
              getEvent={this.getEvent}
              user={this.state.user}
            />
          }
        />
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
        <Route exact path='/create' render = {({history}) =>
            <EventCreatePage 
              history={history}
              user={this.state.user}
         />
      } />
      </Switch>
    </div>
    </>
    );
  }
}

export default App;
