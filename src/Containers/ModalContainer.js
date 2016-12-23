import React, { Component } from 'react';
import Modal from '../Components/Modal';

class ModalContainer extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {echoText: 'please click the button to change this text', };
  }

  handleSubmit(event) {
    event.preventDefault();

    let echoText = event.target[0].value;

    this.setState({echoText: echoText, })
  }

  render() {
    return (
      <div>
        <Modal onSubmit={this.handleSubmit} />
        <div>
          {this.state.echoText}
        </div>
      </div>
    );
  }
}

export default ModalContainer;
