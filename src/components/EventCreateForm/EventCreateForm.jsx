import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import eventService from '../../utils/eventsService';

class EventCreateForm extends Component {

  state = {
    name: "",
    description: "",
    time: "",
    maxSlots: 10, /// this number will be for validation of saying "hey max slots filled" for when users try to push themselves into the array
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await eventService.create(this.state);
      this.props.history.push('/');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }



  isFormInvalid() {
    return !(this.state.name && this.state.description && this.state.time);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Create Event</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label>Description</label>
              <textarea type="description" className="form-control" placeholder="Description" value={this.state.description} name="description" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label>Date - Time</label>
              <input type="datetime-local" className="form-control" placeholder="Time" value={this.state.time} name="time" onChange={this.handleChange} />
            </div>
          </div>
           <div className="form-group">
            <div className="col-sm-12">
              <label>Slots</label>
              <input
                type="number"
                className="form-control"
                placeholder="Slots"
                value={this.state.maxSlots}
                name="maxSlots"
                onChange={this.handleChange}
                min="1"
                max="40"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Create Event</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EventCreateForm;
