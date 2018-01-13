import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImageSearchGallery from "../image-search-gallery";
import FacebookLogin from 'react-facebook-login';
import { Card, Icon, Image } from 'semantic-ui-react'


class Home extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);

      let userImageUrl = 'https://graph.facebook.com/'+response.id+'/picture?width=9999'
      localStorage.setItem('userImageUrl',userImageUrl);
      localStorage.setItem('name',response.name);
      localStorage.setItem('email',response.email);
      console.log(userImageUrl)
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

<Image src={localStorage.getItem('userImageUrl')} size='large' />

<Card
    image={localStorage.getItem('userImageUrl')}
    header={localStorage.getItem('name')}
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