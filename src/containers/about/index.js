import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import {
  Dimmer,
  Loader,
  Image,
} from 'semantic-ui-react'

// Actions
import { fetchPosts } from '../../actions/postActions'

//Components
import UserPost from "../../components/user-post";

class About extends Component {

  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    let { posts } = this.props

    return (
      <section>
        {
          (posts.fetching && !posts.fetched)
          ? <Fragment>
              <Dimmer active>
                <Loader size='massive'>Fetching Posts</Loader>
              </Dimmer>
              <Image src='/assets/images/short-paragraph.png' />
              <Image src='/assets/images/short-paragraph.png' />
              <Image src='/assets/images/short-paragraph.png' />
            </Fragment>
          : <Fragment>
            {
              posts.data.map((post) => <UserPost key={post.id} post={post} /> )
            }
            </Fragment>
        }

      </section>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.postsReducer
})

export default connect(
  mapStateToProps,
  { fetchPosts }
)(About)