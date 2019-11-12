import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser';
import App from './app'

Sentry.init({
  release: 'beta-01',
  dsn: "https://56c0254584ef4c329622df7c88b3e672@sentry.io/1816186"
});

Sentry.captureException(new Error("Teste on index.js"));

ReactDOM.render(<App/>, document.getElementById('root'))
