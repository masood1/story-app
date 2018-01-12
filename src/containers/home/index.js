import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImageSearchGallery from "../image-search-gallery";


class Home extends Component {

  render() {

    return (
      <section style={{height: '500px'}}>

      <ImageSearchGallery />

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