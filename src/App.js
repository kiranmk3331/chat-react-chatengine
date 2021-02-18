import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import Login from "./components/Login";



const App = () => {
  if (!localStorage.getItem("username")) return <Login />;
  return (
    <ChatEngine
      height="100vh"
      projectID="1938b850-8f6d-4475-baf2-a66509b88d8d"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      // userName={"johndoe"}
      // userSecret={"123123"}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default App;
