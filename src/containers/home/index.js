import React, { Component } from 'react'
import { connect } from 'react-redux'


class Home extends Component {

  render() {

    return (
      <section style={{height: '500px'}}>


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