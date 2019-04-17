import React         from 'react'
import ReactDOM      from 'react-dom'
import rootReducer   from "./reducers/rootReducer"
import {createStore} from "redux"
import {Provider}    from "react-redux";
import FriendList    from "./components/FriendList";
import MessagesList from "./components/MessagesList";


// import './styles.css'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <FriendList />
        <MessagesList />
      </div>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)