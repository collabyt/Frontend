import React from "react";
import PropTypes from "prop-types";
import VideoItem from "./videos/video-item";
import "./playlist-item.css";
import AddVideoForm from "./videos/add-videos";
import KeywordsList from "./keywords/keywords-list";
import { useHistory } from "react-router-dom";

function PlaylistItem(props) {

	let history = useHistory();
	const { active, index, playlist } = props;
	
	const goToDetails = (playlist) => {
		history.push("/playlists/" + playlist.publicid);
	}

	return (
		<div className={active  ? "carousel-item active" : "carousel-item"}>
			<div className="row">
				<div className="col-xl-12 mx-auto">
					<div className="cta text-center rounded playlist-container">
						<h6 className="section-heading mb-3">	
							<span className="section-heading-lower"><button className="btn btn-link" onClick={() => goToDetails(playlist)}>{playlist.name}</button></span>
						</h6>
						<ul id={"playlist_" + index} className="mx-0 p-0 mb-2 text-left scroll-playlist">
						<li className="d-flex w-100 mb-1 flex-column">
							<button type="button" className="btn btn-ouline-primary text-left w-100" data-toggle="collapse" 
							data-parent={"#playlist_" + index} href={"#add_" + index}>
								Add video
								<div className="bi bi-chevron-down float-right mt-1">
								<i className="fa fa-plus"></i>
								</div>
							</button>
							<div className="panel-collapse collapse text-center"  id={"add_" + index}>
								<div className="col-xl-8 mx-auto border mt-2 mb-2 p-2">
								<AddVideoForm playlist={playlist}></AddVideoForm>
								</div>
							</div>
						</li>
						{
							playlist.videos && playlist.videos.map((video, index) => {
								return (<VideoItem key={index} video={video} index={index} indexPlaylist={1}/>)
							})
						}
						</ul>
						<KeywordsList keywords={playlist.keywords}/>
					</div>
				</div>
			</div>
		</div>
	);
}

PlaylistItem.propTypes = {
	index: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
	playlist: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string.isRequired,
		publicid: PropTypes.string.isRequired,
		public: PropTypes.bool,
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
			uniqueid: PropTypes.string
			})
		)
	})
};

export default  PlaylistItem;
