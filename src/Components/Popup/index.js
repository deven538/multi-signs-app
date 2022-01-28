import React, { Component } from "react";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form>
            <h3>Enter Details here!</h3>
            <label className="email-label">
              Email:
              </label>
              <input type="email" name="name" placeholder="abc@xyz.com" className="input-edit"/>
            
            <br />
            <label className="password-class">
              Password:
            </label>
              <input type="password" name="password" className="input-" />
            <br/>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
