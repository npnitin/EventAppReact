import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { createEvent, updateEvent } from '../EventActions';
import cuid from 'cuid';
import { reduxForm, Field } from 'redux-form';
import TextInput from '../../../util/common/Form/TextInput';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  };
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    event
  }
}

const mapDispatchToProps = {
  createEvent,
  updateEvent
}
class EventForm extends Component {

  state = { ...this.props.event }

  componentDidMount() {
    if (this.props.selectEvent != null) {
      this.setState({
        ...this.props.selectEvent
      })
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
      this.props.history.push('/events');
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
      }
      this.props.createEvent(newEvent);
      this.props.history.push('/events');
    }

  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete='Off'>
          <Field 
            name='title' 
            component={TextInput} 
            placeholder='Event Title' />
          <Field 
            name='category' 
            component={TextInput} 
            placeholder='Event Category' />
          <Field 
            name='description' 
            component={TextInput} 
            placeholder='Event Description' />
          <Field 
            name='city' 
            component={TextInput} 
            placeholder='Event City' />
          <Field 
            name='venue' 
            component={TextInput} 
            placeholder='Event Venue' />
          <Field 
            name='date' 
            component={TextInput} 
            placeholder='Event Date' />
          <Button positive type="submit">Submit</Button>
          <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'eventForm' })(EventForm));
