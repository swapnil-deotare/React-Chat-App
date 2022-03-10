import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.js';

const App = () => {
    return(
        <ChatEngine
            height = "100vh"
            projectID = "6fe86520-c142-43c3-8bb8-288fe7ba8d09"
            userName = "Swapnil"
            userSecret = "Test12345"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
        
    )
}

export default App;