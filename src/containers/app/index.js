import React, {Fragment} from 'react';
import { Route } from 'react-router-dom'

import {
  Container,
} from 'semantic-ui-react'

// Components
import FixedMenu from "../../components/fixed-menu";
import Footer from "../../components/footer";

//Containers
import Home from '../home'
import About from '../about'

const App = () => (
  <Fragment>
    <FixedMenu />
    <Container as="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </Container>
    <Footer />
  </Fragment>
)

export default App