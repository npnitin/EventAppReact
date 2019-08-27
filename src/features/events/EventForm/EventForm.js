import React, { Component } from 'react'
import { Segment, Form, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { createEvent, updateEvent } from '../EventActions';
import cuid from 'cuid';
import { reduxForm, Field } from 'redux-form';
import TextInput from '../../../util/common/Form/TextInput';
import TextAreaInput from '../../../util/common/Form/TextAreaInput';
import SelectInput from '../../../util/common/Form/SelectInput';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
   
  };
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    initialValues:event
  }
}

const mapDispatchToProps = {
  createEvent,
  updateEvent
}

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];
class EventForm extends Component {

  state = { ...this.props.event }

  componentDidMount() {
    if (this.props.selectEvent != null) {
      this.setState({
        ...this.props.selectEvent
      })
    }
  }

  onSubmit = (values) => {
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${values.id}`);
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
   
    return (
      <Segment>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)} autoComplete='Off'>
          <Header color='teal' content='Event Details'/>
          <Field 
            name='title' 
            component={TextInput} 
            placeholder='Event Title' />
          <Field 
            name='category' 
            type="text"
            component={SelectInput} 
            options={category}
          /*   multiple={true} */
            placeholder='Event Category' />
          <Field 
            name='description' 
            component={TextAreaInput} 
            rows={5}
            placeholder='Event Description' />
            

      <Header color='teal' content='Event Location Details'/>
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
