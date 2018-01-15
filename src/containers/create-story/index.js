import React, { Component } from 'react'
import { connect } from 'react-redux'

import Editor from 'react-medium-editor';
import {
  Grid
} from 'semantic-ui-react'

import './index.css'

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

class CreateStory extends Component {
  state = {
    titleText: '',
    contentText: ''
  }

  handleTitleChange(text, medium) {
    this.setState({titleText: text});
  }

  handleContentChange(text, medium) {
    this.setState({contentText: text});
  }

  render() {
    return(
      <section className="create-story">
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={12} tablet={16} mobile={16}>
            <Editor
                text={this.state.titleText}
                onChange={this.handleTitleChange.bind(this)}
                options={{
                  placeholder: {
                      text: 'Title',
                  }
                }}
                className="title-input"
            />

            <div className="title-border" />

            <Editor
                text={this.state.contentText}
                onChange={this.handleContentChange.bind(this)}
                options={{
                  placeholder: {
                      text: 'Go on write your story...',
                  }
                }}
                className="story-content"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

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