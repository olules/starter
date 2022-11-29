import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Message extends Component {
  render() {
    return (<div>{this.props.text}</div>);
  }
}

Message.propTypes = {
    text: PropTypes.string.isRequired
}

export default Message;
