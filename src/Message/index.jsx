import React from "react";
import "./style.scss";
import unicornHead from './img/unicorn.png';
import cleverbotHead from './img/cleverbot.png';

const heads = {
  unicorn: unicornHead,
  cleverbot: cleverbotHead,
}

export default class Toggle extends React.Component {
  state = {
    likes: 0,
  }
  
  handleLike = () => {
    this.setState({likes: this.state.likes + 1});
  }

  render() {
    return (
      <div className={`message message--${this.props.side}`}>
        <img class="message__head" src={heads[this.props.name]} />
        <div class="message__text">{this.props.text}</div>
        <button 
          onClick={this.handleLike}
          class="btn-like"
        >
          Likes: {this.state.likes}
        </button>
      </div>
    );
  }
};
