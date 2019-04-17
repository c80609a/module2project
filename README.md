### List of features

* User can add/remove friends
* User can select/unselect friend
* User can send a message to selected friend
* User can view messages list of selected friend

### State tree
```
  {
    friends:         array of {id, name},
    selectedFriend:  id,
    friendCounter:   number (autoincrement),
    messagesList: object of arrays of strings (key is friend_id)
  }
```

