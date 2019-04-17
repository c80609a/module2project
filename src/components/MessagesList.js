import React, {Component} from 'react';
import {connect}          from 'react-redux';
import sendMessage from "../actions/sendMessage";

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selected: state.selectedFriend
  };
}

class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.renderChat    = this.renderChat.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onSendMessage = this.onSendMessage.bind(this)

    this.state = {
      inputValue: ''
    }
  }

  onInputChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  onSendMessage() {
    console.log('<MessagesList.onSendMessage>')
    const { selected }    = this.props
    const { inputValue }  = this.state
    this.setState({ inputValue: ''})
    this.props.dispatch(sendMessage(selected, inputValue))
  }

  renderChat() {
    return(
      <div>
        <input type='text' value={this.state.inputValue} onChange={this.onInputChange} />
        <button onClick={this.onSendMessage}>send</button>
      </div>
    )
  }

  renderMessagesList() {
    const { selected, messages } = this.props
    const selectedMessages = messages[selected]
    return <pre>{JSON.stringify(selectedMessages)}</pre>
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({inputValue: ''})
    }
  }

  render() {
    console.log('<MessagesList.render>')
    const { selected } = this.props
    if (selected === null) return <div>&nbsp;</div>

    return (
      <div>
        {this.renderMessagesList()}
        {this.renderChat()}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(MessagesList);