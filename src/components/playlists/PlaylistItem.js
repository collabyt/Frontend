import React from "react";
import PropTypes from "prop-types";
import VideoItem from "./VideoItem";
import "./PlaylistItem.css";

function PlaylistItem(props) {
	var playlist = props.playlist;

  	return (
	  	<div className={props.active  ? "carousel-item active" : "carousel-item"}>
			<div className="row">
				<div className="col-xl-12 mx-auto">
					<div className="cta text-center rounded pb-0 pt-2">
						<h6 className="section-heading mb-3">	
							<span className="section-heading-lower">{playlist.name}</span>
						</h6>
						<ul id={"playlist_" + props.index} className="mx-0 p-0 mb-5 text-left scroll-playlist">
						{
							playlist.videos && playlist.videos.map((video, index) => {
								return (<VideoItem key={index} video={video} index={index} indexPlaylist={props.index}/>)
							})
						}
						</ul>
					</div>
				</div>
			</div>
		</div>);
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

export default PlaylistItem;
