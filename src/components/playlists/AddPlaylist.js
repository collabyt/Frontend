import React from "react";
import PropTypes from "prop-types";

class AddPlaylistModal extends React.Component {

	render () {
		return (<div className="modal fade" id="createPlaylist" tabIndex="-1" role="dialog" aria-labelledby="createPlaylistTitle">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createPlaylistTitle">New Playlist</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>);

	}
}

export default AddPlaylistModal;
