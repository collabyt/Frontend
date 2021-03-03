import React from "react";
import TextInput from "../../common/text-input";
import PropTypes from "prop-types";
import axios from 'axios';
import * as playlistsApi from '../../../api/playlists-api';

class PrivatePlaylistForm extends React.Component {
  
  constructor(props) {
		super(props);
		this.state = {
			errorMessage: ""
		}
  }
  
  addNewVideo = (publicid, video) => {
		this.props.addNewVideoPlaylist(publicid, video);
  }
  
  handleChangePassPhrase = (e) => {
    this.props.playlist.passphrase = e.target.value;
  }

  authPlaylist = async () => {
    const response = await axios.post(playlistsApi.authPrivatePlaylist(this.props.playlist.publicid));
        
    if (response.data !== null) {
      
    } 
  }
  
  render() {
    const { playlist } = this.props; 
    return (
      <form onSubmit={() => this.authPlaylist()}>
        <TextInput id="passphrase" label="PassPhrase"name="PassPhrase" defaultValue={playlist.passPhrase} onChange={(e) => this.handleChangePassPhrase(e)}/>
  
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    );
  }
}

PrivatePlaylistForm.propTypes = {
  playlist: PropTypes.object.isRequired
};

export default PrivatePlaylistForm;
