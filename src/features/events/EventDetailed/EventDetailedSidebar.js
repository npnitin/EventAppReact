import React from 'react';
import {Segment,List,Item,Label} from 'semantic-ui-react'

const EventDetailedSidebar = (props) => {
  const isHost=false;
    return (
       <div>
             <Segment
               textAlign="center"
               style={{ border: 'none' }}
               attached="top"
               secondary
               inverted
               color="teal"
             >
             {props.attendees && props.attendees.length} {props.attendees.length === 1 ? 'Person':'People'} Going
             </Segment>
             <Segment attached>
               <Item.Group relaxed divided>
                {props.attendees.map((attendee)=>(
                  <Item key={attendee.id} style={{ position: 'relative' }}>
                  {isHost && <Label
                    style={{ position: 'absolute' }}
                    color="orange"
                    ribbon="right"
                  >
                    Host
                  </Label>}
                  <Item.Image verticalAlign="middle" style={{width:'50px'}} src={attendee.photoURL} />
                  <Item.Content verticalAlign="middle">
                    <Item.Header as="h3">
                      <a>{attendee.name}</a>
                    </Item.Header>
                  </Item.Content>
                </Item>
                ))}
               </Item.Group>
             </Segment>
           </div>
    );
}

export default EventDetailedSidebar;
