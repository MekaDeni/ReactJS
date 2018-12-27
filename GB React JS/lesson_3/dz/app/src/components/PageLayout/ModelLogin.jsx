import React, { Component } from "react";

class ModelLogin extends Component {
	render() {
		return(
			<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">Account</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div className="modal-body">
			        <form>
					  <div className="form-group">
					    <label for="exampleInputEmail1">Login</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
					  </div>
					  <div className="form-group">
					    <label for="exampleInputPassword1">Password</label>
					    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
					  </div>
					</form>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			        <button type="button" className="btn btn-primary"  data-dismiss="modal">OK</button>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
}

export default ModelLogin;