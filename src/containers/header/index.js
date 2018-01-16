import React, { Fragment, Component } from 'react'

import {
  Container,
  Menu,
  Icon,
  Modal,
  Button
} from 'semantic-ui-react'

import "./index.css";

class AppHeader extends Component {
  state = {
    loginModalOpen : false
  }

  openLoginModal = () => this.setState({ loginModalOpen: true })

  handleClose = () => this.setState({ loginModalOpen: false })

  render() {

    return(
      <Fragment>
        <Menu fixed='top' size='large' as="header" borderless>
          <Container>
            <Menu.Item header href='/' className="branding">Story App</Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item as='a' href='/create-story'><Icon name='add' /> New Story</Menu.Item>
              <Menu.Item as='span' className="sign-in" onClick={this.openLoginModal}>Sign In</Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>

        <Modal
          open={this.state.loginModalOpen}
          onClose={this.handleClose}
          size='small'
          dimmer="inverted"
          className="login-popup"
        >
          <Modal.Content>
            <h2>Welcome to the Story App</h2>
            <p>Sign in to start a new story and complete stories written by others to make it a masterpiece.</p>

            <div className="social-login-buttons">
              <Button>
                <svg class="svgIcon-use fb-icon" width="25" height="25" viewBox="0 0 25 25"><path d="M20.292 4H4.709A.709.709 0 0 0 4 4.708v15.584c0 .391.317.708.709.708h8.323v-6.375h-2.125v-2.656h2.125V9.844c0-2.196 1.39-3.276 3.348-3.276.938 0 1.745.07 1.98.1v2.295h-1.358c-1.066 0-1.314.507-1.314 1.25v1.756h2.656l-.531 2.656h-2.125L15.73 21h4.562a.708.708 0 0 0 .708-.708V4.708A.708.708 0 0 0 20.292 4" fill-rule="evenodd"></path></svg>
                <span>Sign in with Facebook</span>
              </Button>
              <Button>
                <svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25"><g fill="none" fill-rule="evenodd"><path d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z" fill="#4285F4"></path><path d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z" fill="#34A853"></path><path d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z" fill="#FBBC05"></path><path d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z" fill="#EA4335"></path></g></svg>
                <span>Sign in with Google</span>
              </Button>
            </div>

          </Modal.Content>
        </Modal>
      </Fragment>

    )
  }
}

export default AppHeader