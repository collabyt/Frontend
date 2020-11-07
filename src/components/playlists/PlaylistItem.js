import React from "react";
import PropTypes from "prop-types";
import VideoItem from "./VideoItem";
import "./PlaylistItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddVideoForm from "./AddVideo";
import { addNewVideoPlaylist } from "../../actions/playlistActions";
import { connect } from "react-redux";

class PlaylistItem extends React.Component {

	addNewVideo = (playlistId, video) => {
		this.props.addNewVideoPlaylist(playlistId, video);
	}

	render () {
		return (
			<div className={this.props.active  ? "carousel-item active" : "carousel-item"}>
			  <div className="row">
				  <div className="col-xl-12 mx-auto">
					  <div className="cta text-center rounded pb-0 pt-2">
						  <h6 className="section-heading mb-3">	
							  <span className="section-heading-lower">{this.props.playlist.name}</span>
						  </h6>
						  <ul id={"playlist_" + this.props.index} className="mx-0 p-0 mb-5 text-left scroll-playlist">
						  <li className="d-flex w-100 mb-1 flex-column">
							  <button type="button" className="btn btn-ouline-primary text-left w-100" data-toggle="collapse" 
							  data-parent={"#playlist_" + this.props.index} href={"#add_" + this.props.index}>
								  Add video
								  <div className="bi bi-chevron-down float-right mt-1">
									  <FontAwesomeIcon icon={"plus"} title="Add video"/>
								  </div>
							  </button>
							  <div className="panel-collapse collapse text-center"  id={"add_" + this.props.index}>
								  <div className="col-xl-8 mx-auto border mt-2 mb-2 p-2">
								  <AddVideoForm video={this.props.newVideo} onSubmit={() => this.addNewVideo(this.props.playlist.id, this.state.newVideo)}></AddVideoForm>
								  </div>
							  </div>
						  </li>
						  {
							  this.props.playlist.videos && this.props.playlist.videos.map((video, index) => {
								  return (<VideoItem key={index} video={video} index={index} indexPlaylist={this.props.index}/>)
							  })
						  }
						  </ul>
					  </div>
				  </div>
			  </div>
		  </div>);
	}  
	
}

PlaylistItem.propTypes = {
	index: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
	playlist: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isPublic: PropTypes.bool.isRequired,
		passPhrase: PropTypes.string,
		words: PropTypes.arrayOf(
			PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string
			})
		),
		videos: PropTypes.arrayOf(
			PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			link: PropTypes.string,
			uniqueId: PropTypes.string
			})
		)
	})
};

const mapStateToProps = state => {
	return {
		newVideo: { 
			name: "",
			link: ""
		}
	}
  }

const mapDispatchToProps = {
	addNewVideoPlaylist
  };

export default  connect(mapStateToProps, mapDispatchToProps)(PlaylistItem);
