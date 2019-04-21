import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>
         <FormattedMessage id = "Home.header" defaultMessage = "Hello Word"/>
        </h1>
        <p>
          <FormattedMessage id="Home.dayMessage" defaultMessage = "It's a beautiful day outside"/>
        </p>
        <Link to="/day">
          <FormattedMessage id="Home.dayLink" defaultMessage="Click here to find out why!" />
        </Link>
      </div>
    )
  }
}

export default Home
