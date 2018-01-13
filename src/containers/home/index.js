import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImageSearchGallery from "../image-search-gallery";
import FacebookLogin from 'react-facebook-login';
import { Card, Icon, Image } from 'semantic-ui-react'


class Home extends Component {
  state = {
    userImageUrl : '',
    userName : ''
  }

  render() {

    const responseFacebook = (response) => {
      console.log(response);

      let userImageUrl = 'https://graph.facebook.com/'+response.id+'/picture?width=9999'

      this.setState({
        userImageUrl:userImageUrl,
        userName:response.name
      })
    }

    const extra = (
      <a>
        <Icon name='user' />
        16 Friends
      </a>
    )

    return (
      <section style={{height: '500px'}}>


    

      <ImageSearchGallery />

      <FacebookLogin
      appId="2004005372949932"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook} />

<Card
    image={this.state.userImageUrl}
    header={this.state.name}
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
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
)(Home)