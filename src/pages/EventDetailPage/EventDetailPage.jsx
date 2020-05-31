import React from 'react';
import { Link } from 'react-router-dom';
import './EventDetailPage.css';
import eventService from '../../utils/eventsService'

const EventDetailPage = (props) => {
  
  const event = props.getEvent(props.match.params.idx);

  async function handleJoin() {
    const updatedevent = await eventService.slot(event)
    console.log(updatedevent);
    console.log(props.user)
  }
  
  return (
    <div className='EventDetailPage'>
      {event ?
        <div className='EventDetailPage-event'>
          <span>NAME:</span>
          <span>{event.name}</span>
          <span>Description:</span>
          <span>{event.description}</span>
          <span>Date and Time:</span>
          <span>{event.time}</span>
          {/* form goes here that uses event.slots to so that user can "push" themselves into the array. There should be a method that utilizes the "maxSlots" property of the event set during event Creation */}
          {/* button that says join this event */}
          {/* {
            event.slots.includes(props.user._id) ? 'Already going!' : <button onClick={handleJoin}
            >Handle Join</button>
          } */}
          {event.slots.length != -1 ? 'Some slots here' : 'No slots here'}
          {/* above here will be a map function  to lay out the elements of user names  */}
          <form>

          </form>
          <button onClick={handleJoin}
            >Handle Join</button>
          <span></span>
          <Link to='/'>RETURN</Link>
        </div>
        :
        <h3>Loading...</h3>
      }
    </div>
  );
};

export default EventDetailPage;