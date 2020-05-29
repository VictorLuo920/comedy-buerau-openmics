import React, { Component } from 'react';
import EventCreateForm from '../../components/EventCreateForm/EventCreateForm';
import './EventCreatePage.css';

class EventCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='EventCreatePage'>
        <EventCreateForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default EventCreatePage;