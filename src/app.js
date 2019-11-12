import React from 'react'
import * as Sentry from '@sentry/browser';

const App = () => (
  <div>
     <h1>Hello world!!</h1>
  </div>
)

Sentry.captureException(new Error("Teste on app.js"));

export default App
