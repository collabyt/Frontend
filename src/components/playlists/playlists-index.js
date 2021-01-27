import React from 'react';
import { connect } from 'react-redux';
import PlaylistItems from './playlist-items';
import { loadPlaylists } from '../../actions/playlist-actions';

class PlaylistHome extends React.Component {
  componentDidMount() {
    this.props.loadPlaylists();
  }



  render() {
    return (
      <div className="container d-flex flex-column">
        <button type="button" className="create-playlist btn btn-ouline-primary mb-3 w-25 align-self-end" data-toggle="modal" data-target="#createPlaylist">
          <i className="fa fa-plus mr-1" />Add playlist
        </button>  
        {
          this.props.playlists.length > 0 ? <PlaylistItems playlists={this.props.playlists} /> : <div />
        }
      </div>
    );
  }
}

const mapDispatchToProps = {
  loadPlaylists,
};

const mapStateToProps = (state) => ({
  playlists: state.playlists.totalPlaylists,
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistHome);
