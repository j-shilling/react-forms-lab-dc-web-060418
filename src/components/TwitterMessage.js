import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remaining: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      remaining: this.props.maxChars - event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} value={this.state.message}/>
        <label>{this.state.remaining}</label>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140
};

export default TwitterMessage;
