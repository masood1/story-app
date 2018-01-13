import React, { Component } from 'react'
import { connect } from 'react-redux'

import Editor from 'react-medium-editor';

import './index.css'

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

class CreateStory extends Component {
  state = {
    text: ''
  }

  handleChange(text, medium) {
    this.setState({text: text});
    console.log(medium);

  }

  render() {
    return(
      <section style={{height: '500px'}}>

        <Editor
            text={this.state.text}
            onChange={this.handleChange.bind(this)}
        />
      </section>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(
  mapStateToProps,
  null
)(CreateStory)