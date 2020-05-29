import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import eventsService from '../../utils/eventsService'
import userService from '../../utils/userService'

class EventsIndexPage extends Component {
    constructor() {
        super();
        this.state = {
          events: [],
          user: userService.getUser()
        };
    }

    async componentDidMount() {
        const events = await eventsService.index();
        this.setState({ events: events });
    }

  render() {
    const eventRows = this.state.events.map((event, idx) => (
      <tr key={idx}>
        <td>{idx + 1}</td>
        <td>{event.name}</td>
      </tr>
    ));
  
    return (
      <div>
        <header className='header-footer'>High Scores</header>
          <table className='table text-info'>
            <thead>
              <tr><th>#</th><th>Name</th></tr>
            </thead>
            <tbody>
              {eventRows}
            </tbody>
          </table>
      </div>
    );
  }

}

export default EventsIndexPage;
