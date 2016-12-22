import React, { Component } from 'react';
import Modal from './Components/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal />
      	<div>Click the button to see the modal ...</div>
      	<div>
      		<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModalDialog">
      			Hi! you can click me to see the modal :)
      		</button>
      	</div>
      </div>
    );
  }
}

export default App;
