import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
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
  state={
    isOpen:false,
    selectedEvent:null
  }
  handleCreateFormOpen = () =>{
    this.setState({
      isOpen:true,
      selectedEvent:null
    })
  }
  handleFormCancel =()=>{
    this.setState({
      isOpen:false
    })
  }
  handleCreateEvent = (newEvent) =>{
    newEvent.id = cuid();
    newEvent.hostPhotoURL ='/assets/user.png';
    this.props.createEvent(newEvent);
    this.setState({
      isOpen:false
    })
  }
  handleSelectEvent =(event)=>{
    this.setState({
      selectedEvent:event,
      isOpen:true
    })
  }

  handleUpdateEvent = (updatedEvent) =>{
    this.props.updateEvent(updatedEvent);
    this.setState({
      isOpen:false,
      selectEvent:null,
    })
  }
  handleDeleteEvent=(id)=>{
    this.props.deleteEvent(id);
  }
    render() {
      const{ events }=this.props;
      const{ isOpen,selectedEvent } =this.state;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} selectEvent={this.handleSelectEvent} deleteEvent={this.handleDeleteEvent}/>
                    </Grid.Column>
                <Grid.Column width={6}>
                    <Button positive content='Create Event' onClick={this.handleCreateFormOpen}/>
                    {isOpen && (<EventForm 
                                    key={selectedEvent?selectedEvent.id:0}
                                    updateEvent={this.handleUpdateEvent}
                                    selectEvent={selectedEvent}
                                    createEvent={this.handleCreateEvent}
                                    cancelFormOpen={this.handleFormCancel} />)}
                    </Grid.Column>
            </Grid>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Eventsdashboard);