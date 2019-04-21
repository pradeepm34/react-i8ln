import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl';

export class Weather extends Component {
  render() {
    return (
      <div>
        <p>
            <FormattedMessage id = "Weather.message" defaultMessage = "Because it's sunny"/>
        </p>
      </div>
    )
  }
}

export default Weather
