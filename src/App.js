import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.js';
import LoginForm from './components/LoginForm';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height = "100vh"
            projectID = "6fe86520-c142-43c3-8bb8-288fe7ba8d09"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
        
    )
}

export default App;