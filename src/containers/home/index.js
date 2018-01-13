import React, { Component } from 'react'
import { connect } from 'react-redux'

import ImageSearchGallery from "../image-search-gallery";

import {
  Icon,
} from 'semantic-ui-react'


class Home extends Component {

  render() {

    return (
      <section style={{height: '500px'}}>

        <ImageSearchGallery />

        <Icon name='add' circular className="clapButton" size="large" />
      </section>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(
  mapStateToProps,
  null
)(Home)