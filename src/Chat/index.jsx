import React from "react";
import Message from '../Message/index.jsx';
import "./style.scss";

export default class Chat extends React.Component {
  state = {
    chat: [],
  }
  
  componentDidMount() {
    fetch('http://bootcamp.podlomar.org/api/robotchat')
      .then((resp) => resp.json())
      .then((json) => this.setState({chat: json}));
  }

  render() {
    return (
      <div className="chat">
        {
          this.state.chat.map((message) => (
            <Message 
              side={message.side}
              name={message.name}
              text={message.text}
            />
          ))
        }
      </div>
    );
  }
};
