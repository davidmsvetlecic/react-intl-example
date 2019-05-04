import React, { Component } from 'react';
import { injectIntl, defineMessages } from "react-intl";

import logo from './logo.svg';
import './App.css';

const messages = defineMessages({
  title: {
    id: 'app.title',
    defaultMessage: 'Welcome to React'
  },
  content1: {
    id: 'app.content1',
    defaultMessage: 'To get started, edit'
  },
  content2: {
    id: 'app.content2',
    defaultMessage: 'and save to reload.'
  },
})
// <h1 className="App-title"><FormattedMessage id="messages.title" defaultMessage="Welcome to React" description="App Welcome" /></h1>

class App extends Component {
  render() {
    const {intl:{formatMessage}} = this.props;
    return (
        <div className="App">
          <header className="App-header">
            <div className="languages">
              <a href="/?locale=fr">Français</a>
              <a href="/?locale=en">English</a>
              <a href="/?locale=es">Español</a>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{formatMessage(messages.title)}</h1>
          </header>
          <p className="App-intro">
            {formatMessage(messages.content1)} <code>src/App.js</code> {formatMessage(messages.content2)}
          </p>
        </div>
    );
  }
}

export default injectIntl(App);