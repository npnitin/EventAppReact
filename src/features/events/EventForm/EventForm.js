import React, { Component } from 'react'
import { Segment,Form,Button } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {createEvent,updateEvent} from '../EventActions';
import cuid from 'cuid';
const mapStateToProps = (state,ownProps) =>{
  const eventId = ownProps.match.params.id;
  let event = {
    title:'',
    date:'',
    city:'',
    venue:'',
    hostedBy:''
  };
  if(eventId && state.events.length>0){
    event = state.events.filter(event=> event.id ===eventId)[0];
  }
  return{
    event
  }
}

const mapDispatchToProps={
  createEvent,
  updateEvent
}
class EventForm extends Component {

  state={...this.props.event}

  componentDidMount(){
    if(this.props.selectEvent!=null){
      this.setState({
        ...this.props.selectEvent
      })
    }
  }

  handleFormSubmit = (event) =>{
    event.preventDefault();
    if(this.state.id){
      this.props.updateEvent(this.state);
      this.props.history.push('/events');
    }else{
      const newEvent = {
        ...this.state,
        id:cuid(),
        hostPhotoURL:'/assets/user.png'
      }
      this.props.createEvent(newEvent);
      this.props.history.push('/events');
    }
   
  }
  handleChange = (event) =>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
 
    render() {
      const{ title,date,city,venue,hostedBy } = this.state;
        return (
           <Segment>
                         <Form onSubmit={this.handleFormSubmit} autoComplete='Off'>
                           <Form.Field>
                             <label>Event Title</label>
                             <input 
                                name='title' 
                                value={title} 
                                placeholder="Event Title" 
                                onChange={this.handleChange}/>
                           </Form.Field>
                           <Form.Field>
                             <label>Event Date</label>
                             <input 
                             type="date" 
                             placeholder="Event Date" 
                             name='date' 
                             value={date}
                             onChange={this.handleChange} />
                           </Form.Field>
                           <Form.Field>
                             <label>City</label>
                             <input 
                              placeholder="City event is taking place"
                              name='city'
                              value={city}
                              onChange={this.handleChange} />
                           </Form.Field>
                           <Form.Field>
                             <label>Venue</label>
                             <input 
                             name='venue'
                             placeholder="Enter the Venue of the event" 
                             value={venue}
                             onChange={this.handleChange}/>
                           </Form.Field>
                           <Form.Field>
                             <label>Hosted By</label>
                             <input 
                             placeholder="Enter the name of person hosting"
                             name='hostedBy'
                             value={hostedBy}
                             onChange={this.handleChange} />
                           </Form.Field>
                           <Button positive type="submit">
                             Submit
                           </Button>
                           <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
                         </Form>
                       </Segment>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventForm);
