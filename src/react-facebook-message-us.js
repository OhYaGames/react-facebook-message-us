import React, { Component, PropTypes } from 'react';

export default class FacebookMessenger extends Component {
  render() {
    const styles = require('./react-facebook-message-us.scss');
    const { msg, page, icon } = this.props;
    return (
      <a href={'http://m.me/' + page} target="_blank">
        <div className={styles.fbmessenger}>
          <img src={icon} />
          <span className={styles.tooltiptext + ' ' + styles.mobilehidden}>{msg}</span>
        </div>
      </a>
    );
  }
}

FacebookMessenger.propTypes = {
  page: PropTypes.string,
  msg: PropTypes.string,
  icon: PropTypes.string
}

FacebookMessenger.defaultProps = {
  icon: './MessengerIcon_50.png'
}