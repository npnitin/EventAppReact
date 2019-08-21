import React, { Fragment } from 'react';
import { Menu,Button } from 'semantic-ui-react'
const SignOutMenu = ({signIn}) => {
    return (
        <Fragment>
             <Menu.Item position='right'>
                            <Button basic inverted content='Login' onClick={signIn}/>
                            <Button basic inverted content='Registers' style={{ marginLeft: '0.5em' }} />
                        </Menu.Item>
        </Fragment>
    );
}

export default SignOutMenu;
