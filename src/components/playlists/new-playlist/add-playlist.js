import React, { useState } from 'react';
import TextInput from '../../common/text-input';
import { connect } from 'react-redux';
import AddVideos from './add-videos';

function AddPlaylistModal (props) {

  const [ isPublic, setPublic ] = useState(true);
  const checkPublicPlaylist = (e) => {
    setPublic(e.target.value === "true");
    this.props.newPlaylist.isPublic = (e.target.value === "true");
  }

  return (
    <div className="modal fade" id="createPlaylist" tabIndex="-1" role="dialog" aria-labelledby="createPlaylistTitle"  aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createPlaylistTitle">New Playlist</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <form>
              <TextInput id="nameModal" label="Name"name="Name" value={props.newPlaylist.name}/>
              <div className="row">
                <div className="col-md-4">
                  <label>Public</label>
                  <div className="radio">
                    <label><input type="radio" value={props.newPlaylist.isPublic} checked={isPublic == true}
                      onChange={checkPublicPlaylist} />Yes</label>
                  </div>
                  <div className="radio">
                    <label><input type="radio" value={!props.newPlaylist.isPublic} checked={isPublic == false} 
                      onChange={checkPublicPlaylist} />No</label>
                  </div>
                </div>
                <div className="col-md-8">
                  <TextInput id="passphrase" label="PassPhrase"name="PassPhrase" value={props.newPlaylist.passPhrase} isDisabled={isPublic}/>
                </div>
              </div>
              
              <TextInput id="words" label="Keywords"name="Keywords" value=""/>
              <AddVideos videos={props.newPlaylist.videos} />
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

const mapStateToProps = state => {
	return {
		newPlaylist: {
      name: '',
      isPublic: true,
      passPhrase: '',
      words: [],
      videos: [],
    }
	}
}

export default  connect(mapStateToProps, null)(AddPlaylistModal);


