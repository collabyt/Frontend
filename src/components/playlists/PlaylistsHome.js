import React from 'react';
import { connect } from 'react-redux';
import PlaylistItems from './PlaylistItems';
import { loadPlaylists } from '../../actions/playlistActions';

class PlaylistHome extends React.Component {
  componentDidMount() {
    this.props.loadPlaylists();
  }

  render() {
    return (
      <>
        {
        this.props.playlists.length > 0 ? <PlaylistItems playlists={this.props.playlists} /> : <div />
      }
      </>
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
