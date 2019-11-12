import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser';

Sentry.init({
  release: "danilo-deverso@beta-01",
  dsn: "https://56c0254584ef4c329622df7c88b3e672@sentry.io/1816186"
});

const App = () => (
  <div>
     <h1>Hello world!!</h1>
  </div>
)
ReactDOM.render(<App/>, document.getElementById('root'))

console.log(abcdefgh)
