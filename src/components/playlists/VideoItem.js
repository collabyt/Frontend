import React from "react";
import PropTypes from "prop-types";
import $ from 'jquery';

function getScrollTop(topDistance) {
	
	if (topDistance < 250) {
		return 50;
	} else if (topDistance < 400 && topDistance > 250) {
		return 150;
	} else {
		return 300;
	}
}

function VideoItem(props) {
	var video = props.video;

  	return (<li className="d-flex w-100 mb-1 flex-column">
			<button type="button"  className="btn btn-ouline-primary text-left w-100" data-toggle="collapse" 
			data-parent={"#playlist_" + props.indexPlaylist} href={"#video_" + props.indexPlaylist + props.index}>
				{video.name}
				<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down float-right mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
				</svg>
			</button>
			<div className="panel-collapse collapse text-center"  id={"video_" + props.indexPlaylist + props.index}>
				<iframe name={"video_" + props.index} title={"video_" + props.index} id={"video_" + props.index} type="text/html" width="700" height="375" src={video.link}
					frameBorder="0" allowFullScreen></iframe>
			</div>
		</li>);
}

VideoItem.propTypes = {
	index: PropTypes.number.isRequired,
	indexPlaylist: PropTypes.number.isRequired,
	video: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		link: PropTypes.string,
		uniqueId: PropTypes.string
	}).isRequired
};

export default VideoItem;
