import React from 'react'

import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react'

import "./index.css";

const FixedMenu = () => (
  <Menu inverted fixed='top' size='large' as="header">
    <Container>
      <Menu.Item header href='/' className="branding">Story App</Menu.Item>
      <Menu.Item as='a' href='/'>Home</Menu.Item>
      <Menu.Item as='a' href='/about-us'>About</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default FixedMenu