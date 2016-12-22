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
  				<div className="modal-body">
  					<p>One fine body&hellip;</p>
  				</div>
  				<div className="modal-footer">
  					<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
  					<button type="button" className="btn btn-primary">Save changes</button>
  				</div>
  			</div>
  		</div>
  	</div> 
  );
}

export default Modal;
