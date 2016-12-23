import React from 'react';

const Modal = (props) => {
    return (
  	<div id='myModalDialog' className="modal fade" tabIndex="-1" role="dialog">
  		<div className="modal-dialog" role="document">
  			<div className="modal-content">
  				<div className="modal-header">
  					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  					<h4 className="modal-title">Modal title</h4>
  				</div>
          <form onSubmit={props.onSubmit}>
    				<div className="modal-body">
      					<p><input type='text' placeholder='enter some text to echo' /></p>
    				</div>
    				<div className="modal-footer">
    					<button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#myModalDialog">Save changes</button>
    				</div>
          </form>
  			</div>
  		</div>
  	</div>
  );
}

export default Modal;
