import React, { Component } from 'react';
import { EmbeddedApp } from '@shopify/polaris/embedded';
import MyApp from './components/MyApp'

class App extends Component {
  render() {
    const { apiKey, shopOrigin } = window;

    return (
      <EmbeddedApp shopOrigin={shopOrigin} apiKey={apiKey}>
        <MyApp />
      </EmbeddedApp>
    );
  }
}

export default App;
