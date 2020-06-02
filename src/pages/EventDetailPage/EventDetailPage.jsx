import React from 'react';
import { Link } from 'react-router-dom';
import './EventDetailPage.css';
import eventService from '../../utils/eventsService'

const EventDetailPage = (props) => {
  
  const event = props.getEvent(props.match.params.idx);
  

  const handleJoin = async () => {
    const updatedevent = await eventService.slot(event)
    console.log(updatedevent);
    console.log(props.user)
  }
  
  const handleRemoveJoin = async () => {
    const updatedevent = await eventService.unslot(event)
    console.log(updatedevent);
  }

  return (
    <div className='EventDetailPage'>
      {event ?
        <div className='EventDetailPage-event'>
          <span>Name:</span>
          <span>{event.name}</span>
          <span>Description:</span>
          <span>{event.description}</span>
          <span>Date and Time:</span>
          <span>{event.time}</span>

          <span>List of Attendees</span>

          {event.slots.length != 0 ? 
            event.slots.map((user, idx) => (<span key={idx}> # {idx + 1} )  {user.name}</span>)) : 
            "No Attendees Yet"
          }
          
      
          <br></br>

          {event.slots.length === event.maxSlots ? 
          'Sorry, All Slots Filled!': 
          <button type='button' className="btn btn-info EventDetailPage-btn" onClick={handleJoin}>Add Me!</button>}

          <button type='button' className="btn btn-info EventDetailPage-btn" onClick={handleRemoveJoin}>Remove Me!</button>

          <span></span>
          <br></br>
          <Link to='/'>RETURN</Link>
        </div>
        :
        <h3>Loading...</h3>
      }
    </div>
  );
};

export default EventDetailPage;