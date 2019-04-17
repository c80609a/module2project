import React, {Component} from 'react';
import {connect} from 'react-redux';
import addFriend from "../actions/addFriend";
import removeFriend from "../actions/removeFriend";

function mapStateToProps(state) {
  return { counter: state.counter, friends: state.friends };
}

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.onAddFriend = this.onAddFriend.bind(this)
  }

  onAddFriend() {
    this.props.dispatch(addFriend(this.props.counter))
  }

  onRemoveFriend(friend_id) {
    this.props.dispatch(removeFriend(friend_id))
  }

  render() {
    console.log('<render>')
    console.log(JSON.stringify(this.props, null, 2))
    const { friends } = this.props

    return (
      <div className='FriendList'>
        <div className='list'>
          {friends.map(
            (friend) => {
              return <div key={friend.id}>
                {friend.name}
                <a href='#' onClick={() => this.onRemoveFriend(friend.id)}>remove</a>
              </div>
            }
          )}
        </div>
        <div className='controls'>
          <a href='#' onClick={this.onAddFriend}>Add friend</a>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(FriendList);