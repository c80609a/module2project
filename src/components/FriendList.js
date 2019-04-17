import React, {Component} from 'react';
import {connect} from 'react-redux';
import addFriend from "../actions/addFriend";
import removeFriend from "../actions/removeFriend";
import toggleFriend from "../actions/toggleFriend";

function mapStateToProps(state) {
  return {
    counter:  state.counter,
    friends:  state.friends,
    selected: state.selectedFriend
  };
}

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.onAddFriend = this.onAddFriend.bind(this)
  }

  onAddFriend(e) {
    e.preventDefault()
    this.props.dispatch(addFriend(this.props.counter))
  }

  onRemoveFriend(e, friend_id) {
    e.preventDefault()
    this.props.dispatch(removeFriend(friend_id))
  }

  onToggleFriend(e, friend_id) {
    e.preventDefault()
    this.props.dispatch(toggleFriend(friend_id))
  }

  render() {
    console.log('<FriendList.render>')
    const { friends, selected } = this.props

    return (
      <div className='FriendList'>
        <div className='controls'>
          <a href='/' onClick={this.onAddFriend}>Add friend</a>
        </div>
        <div className='list'>
          {friends.map(
            (friend) => {
              return <div key={friend.id}>
                {friend.name}
                <a href='/' onClick={(e) => this.onRemoveFriend(e, friend.id)}>remove</a>
                 |
                <a href='/' onClick={(e) => this.onToggleFriend(e, friend.id)}>
                  {selected === friend.id ? 'unselect':'select'}
                </a>
              </div>
            }
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(FriendList);
