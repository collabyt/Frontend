import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

class AddPlaylistModal extends React.Component {
  render() {
    return (
      <div className="modal fade" id="createPlaylist" tabIndex="-1" role="dialog" aria-labelledby="createPlaylistTitle">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createPlaylistTitle">New Playlist</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form >
                <TextInput id="name" label="Name"name="Name" value=""/>
                <TextInput id="name" label="Name"name="Name" value=""/>
                <button type="button" className="btn btn-ouline-primary text-left w-100">
								  Add video
								  <div className="bi bi-chevron-down float-right mt-1">
								  	<i className="fa fa-plus"></i>
								  </div>
							  </button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPlaylistModal;
