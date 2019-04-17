import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return state;
}

class FriendList extends Component {
  render() {
    console.log(JSON.stringify(this.props, null, 2))
    return (
      <div>
        FriendList
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(FriendList);