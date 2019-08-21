import React from 'react';
import { Button,Segment,Container,Header,Image,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const HomePage = (props) => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
           <Container text>
             <Header as='h1' inverted>
               <Image
                 size='massive'
                 src='/assets/logo.png'
                 alt='logo'
                 style={{ marginBottom: 12 }}
               />
               Re-vents
             </Header>
             <Button size='huge' as={Link} to="/events" inverted>
               Get started
               <Icon name='right arrow' inverted />
             </Button>
           </Container>
         </Segment>
    );
}

export default HomePage;
