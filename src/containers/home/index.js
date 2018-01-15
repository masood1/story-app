import React, { Component } from 'react'
import { connect } from 'react-redux'

import ImageSearchGallery from "../image-search-gallery";
import FacebookLogin from 'react-facebook-login';
import { Card, Icon, Modal, Button, Header } from 'semantic-ui-react'
import './index.css'


class Home extends Component {
  state = {
    userImageUrl : '',
    userName : ''
  }

  render() {

    const responseFacebook = (response) => {
      console.log(response);

      let userImageUrl = 'https://graph.facebook.com/'+response.id+'/picture?width=9999'
      let userName = response.name

      this.setState({
        userImageUrl:userImageUrl,
        userName:userName
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

      <Modal
        trigger={<Button onClick={this.handleOpen}>Sign in</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Cookies policy' />
        <Modal.Content>
          <h3>Please login with</h3>
        </Modal.Content>

        <FacebookLogin
        appId="2004005372949932"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        />

      </Modal>


        <ImageSearchGallery />

        <Icon name='add' circular className="clapButton" size="large" />

        <Card
            image={this.state.userImageUrl}
            header={this.state.userName}
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