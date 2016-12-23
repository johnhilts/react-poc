import React, { Component } from 'react';
import ModalContainer from './Containers/ModalContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalContainer />
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
