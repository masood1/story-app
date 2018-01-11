import React, {Fragment} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'

import './index.css'

const target = document.querySelector('#stapp-root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <App />
      </Fragment>
    </ConnectedRouter>
  </Provider>,
  target
)