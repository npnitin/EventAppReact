import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link,withRouter} from 'react-router-dom';
import SignOutMenu from '../../Menus/SignOutMenu';
import SignInMenu from '../../Menus/SignInMenu';
class Navbar extends Component {
    state={
        authenticated:false
    }
    handleSignIn = () =>{
        this.setState({
            authenticated:true
        })
    }
    handleSignOut = () =>{
        this.setState({
            authenticated:false
        })
        this.props.history.push('/');
    }
    render() {
        const{ authenticated } = this.state;
        return (
            <div>
                <Menu inverted fixed='top'>
                    <Container>
                        <Menu.Item header as={NavLink} exact to="/">
                            <img src='assets/logo.png' alt='logo' />Reevents
                </Menu.Item>
                        <Menu.Item name='Events' as={NavLink} to="/events" />
                        <Menu.Item name='People' as={NavLink} to="/people" />
                        <Menu.Item>
                            <Button floated='right' as={Link} to="/createEvent" positive inverted content='Create Event' />
                        </Menu.Item>
                        {authenticated ? (
                        <SignInMenu signOut={this.handleSignOut}/>
                        ) :(
                        <SignOutMenu signIn={this.handleSignIn}/>
                        )}
                    </Container>
                </Menu>
            </div>
        )
    }
}

export default withRouter(Navbar);