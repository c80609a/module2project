import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return { messages: state.messages };
}

class MessagesList extends Component {
  render() {
    return (
      <div>
        MessagesList
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(MessagesList);