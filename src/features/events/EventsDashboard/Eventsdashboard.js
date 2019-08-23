import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import cuid from 'cuid';
import { connect } from 'react-redux';
import { createEvent,updateEvent,deleteEvent } from '../EventActions';

const mapStateToProps = (state) =>({
  events:state.events
})

const mapDispatchToProps = {
  createEvent,
  updateEvent,
  deleteEvent
}

class Eventsdashboard extends Component {

  handleCreateEvent = (newEvent) =>{
    newEvent.id = cuid();
    newEvent.hostPhotoURL ='/assets/user.png';
    this.props.createEvent(newEvent);
    
  }
  handleSelectEvent =(event)=>{
    this.setState({
      selectedEvent:event,
      isOpen:true
    })
  }

  handleUpdateEvent = (updatedEvent) =>{
    this.props.updateEvent(updatedEvent);
  }
  handleDeleteEvent=(id)=>{
    this.props.deleteEvent(id);
  }
    render() {
      const{ events }=this.props;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events}  deleteEvent={this.handleDeleteEvent}/>
                    </Grid.Column>
                <Grid.Column width={6}>
                    <h2>Activity Feed</h2>
                    </Grid.Column>
            </Grid>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Eventsdashboard);