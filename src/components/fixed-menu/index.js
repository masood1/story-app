import React from 'react'

import {
  Button,
  Container,
  Menu,
  Icon,
} from 'semantic-ui-react'

import "./index.css";

const FixedMenu = () => (
  <Menu fixed='top' size='large' as="header" borderless>
    <Container>
      <Menu.Item header href='/' className="branding">Story App</Menu.Item>
      <Menu.Item as='a' href='/'>Home</Menu.Item>
      <Menu.Item as='a' href='/about-us'>About</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item as='a' href='/create-story'><Icon name='add' /> New Story</Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default FixedMenu