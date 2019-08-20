import React, { Component } from 'react'
import { Segment,Form,Button } from 'semantic-ui-react'

class EventForm extends Component {

  state={
    title:'',
    date:'',
    city:'',
    venue:'',
    hostedBy:''
  }

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
    }else{
      this.props.createEvent(this.state);
    }
   
  }
  handleChange = (event) =>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
 
    render() {
      const{ cancelFormOpen } = this.props;
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
                           <Button type="button" onClick={cancelFormOpen}>Cancel</Button>
                         </Form>
                       </Segment>
        )
    }
}

export default EventForm;
