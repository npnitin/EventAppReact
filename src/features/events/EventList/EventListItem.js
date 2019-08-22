import React, { Component } from 'react'
import { Button ,Segment,Item,Icon,List} from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';
class EventListItem extends Component {
    render() {
       const {event,selectEvent,deleteEvent} = this.props;
        return (
                  <Segment.Group>
                        <Segment>
                          <Item.Group>
                            <Item>
                              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                              <Item.Content>
                                <Item.Header as="a">{event.title}</Item.Header>
                                <Item.Description>
                                  Hosted by <a>{event.hostedBy}</a>
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Item.Group>
                        </Segment>
                        <Segment>
                          <span>
                            <Icon name="clock" /> {event.date} |
                            <Icon name="marker" /> {event.venue}
                          </span>
                        </Segment>
                        <Segment secondary>
                          <List horizontal>
                            {event.attendees && event.attendees.map(attendee=>(
                                  <EventListAttendee key={attendee.id} attendee={attendee}/>
                            ))}
                          </List>
                        </Segment>
                        <Segment clearing>
                          <span>{event.description}</span>
                          <Button color='red' 
                          onClick={()=>deleteEvent(event.id)} 
                          as="a" 
                          floated="right" 
                          content="Delete" />
                          <Button 
                          as={Link}
                          to={`events/${event.id}`}
                          color="teal" 
                          floated="right" 
                          content="View" />
                         
                        </Segment>
                      </Segment.Group>
        )
    }
}
export default EventListItem;