import React, { useState } from 'react';
import TextInput from '../../common/text-input';
import { connect } from 'react-redux';
import AddVideos from './add-videos';
import { createPlaylist } from "../../../actions/playlist-actions";
import AddWords from './add-words';

class AddPlaylistModal extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
      isPublic: true,
      newPlaylist: {
        name: '',
        public: true,
        passphrase: '',
        keywords: [],
        videos: [],
      },
      newVideo: {link: '', uniqueid: ''},
      newKeyword: { id: 0, keyword: ''}
		}
  }

  checkPublicPlaylist = (e) => {
    this.setState({isPublic: e.target.value === "true"});
    this.props.newPlaylist.isPublic = (e.target.value === "true");
    this.setState({newPlaylist: this.state.newPlaylist});
  }

   addNewVideos = (newVideo) => {
    if (newVideo.link != '' && newVideo.name != '') {
         this.state.newPlaylist.videos.push(newVideo);
         this.setState({newPlaylist: this.state.newPlaylist});
    }
  }

  addKeyword = (newKeyword) => {
    if (newKeyword.keyword != '') {
         this.state.newPlaylist.keywords.push(newKeyword);
         this.setState({newPlaylist: this.state.newPlaylist});
    }
  }

  createPlaylist = (newPlaylist, e) => {
    const playlistBody = newPlaylist;

    this.cleanData();
    this.props.createPlaylist(playlistBody);
  }

  handleChangeName = (e) => {
    this.state.newPlaylist.name = e.target.value
    this.setState({newPlaylist: this.state.newPlaylist});
  }

  cleanData = () => {
    this.state.newPlaylist = {
      name: '',
      public: true,
      passphrase: '',
      keywords: [],
      videos: [],
    };
    this.state.newVideo = {link: '', uniqueid: ''};
    this.state.newKeyword = { id: 0, keyword: ''}

    this.setState({ newPlaylist: this.state.newPlaylist});
    this.setState({ newVideo: this.state.newVideo});
    this.setState({ newKeyword: this.state.newKeyword});
  }


  render() {
    const { newPlaylist } = this.state;
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
                <TextInput id="nameModal" label="Name"name="Name" defaultValue={newPlaylist.name} onChange={(e) => this.handleChangeName(e)}/>
                <div className="row">
                  <div className="col-md-4">
                    <label>Public</label>
                    <div className="d-flex flex-row">
                    <div className="radio mr-3">
                      <label><input type="radio" defaultValue={newPlaylist.isPublic} checked={this.state.isPublic == true}
                        onChange={(e) => this.checkPublicPlaylist(e)} />Yes</label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" defaultValue={!newPlaylist.isPublic} checked={this.state.isPublic == false} 
                        onChange={(e) => this.checkPublicPlaylist(e)} />No</label>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <TextInput id="passphrase" label="PassPhrase"name="PassPhrase" defaultValue={newPlaylist.passPhrase} isDisabled={this.state.isPublic}/>
                  </div>
                </div>
                <strong>Keywords</strong>
                <AddWords keywords={newPlaylist.keywords} newKeyword={this.state.newKeyword} addNewKeyword={() => this.addKeyword(this.state.newKeyword)}></AddWords>
                <hr/>
                <strong>Videos</strong>
                <AddVideos videos={newPlaylist.videos} newVideo={this.state.newVideo} addNewVideos={() => this.addNewVideos(this.state.newVideo)} />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" onClick={(e) => this.createPlaylist(newPlaylist, e)} data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

const mapDispatchToProps = {
	createPlaylist
  };



export default connect(null, mapDispatchToProps)(AddPlaylistModal);


