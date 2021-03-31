import * as axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import KeywordsList from "../keywords/keywords-list";
import VideoItem from "../videos/video-item";
import AddVideoForm from "../videos/add-videos";
import "./playlist-item-details.css";
import PrivatePlaylistForm from "./private-form-playlist";
import { useParams } from "react-router-dom";
import * as playlistsApi from '../../../api/playlists-api';

const PlaylistItemDetails = () => {

	const { publicid } = useParams();
	const [playlist, setPlaylist] = useState();
  	const isMounted = useRef();
  
	  useEffect(() => {
		isMounted.current = true;
		loadData();
	
		return () => isMounted.current = false;
	  }, [isMounted]);

  	const loadData = async() => {
    	let response = await axios.get(playlistsApi.getPlaylistByPublicid(publicid));

    	if (response.status == 200 && isMounted.current) {
      		let _playlist = response.data;
      
      		setPlaylist(_playlist)
			console.log(playlist);
    	}
  	}

	return (
		<div className="container">
				<div className="col-xl-12 mx-auto">
					<div className="cta text-center rounded playlist-container">
						<h6 className="section-heading mb-3">	
							<span className="section-heading-lower">{playlist?.name}</span>
						</h6>
						<ul id={"playlist_" + playlist?.publicid} className="mx-0 p-0 mb-2 text-left scroll-playlist">
						{
							playlist?.public == false && <li className="d-flex w-100 mb-1 flex-column">
								<button type="button" className="btn btn-ouline-primary text-left w-100" data-toggle="collapse" 
								data-parent={"#playlist_" + playlist?.publicid} href={"#add_" + playlist?.publicid}>
									Private
									<div className="bi bi-chevron-down float-right mt-1">
										<i className="fa fa-plus"></i>
									</div>
								</button>
								<div className="panel-collapse collapse text-center"  id={"add_" + playlist?.publicid}>
									<div className="col-xl-8 mx-auto border mt-2 mb-2 p-2">
									<PrivatePlaylistForm playlist={playlist}></PrivatePlaylistForm>
									</div>
								</div>
							</li>
						}
						<li className="d-flex w-100 mb-1 flex-column">
							<button type="button" className="btn btn-ouline-primary text-left w-100" data-toggle="collapse" 
							data-parent={"#playlist_" + playlist?.publicid} href={"#add_" + playlist?.publicid}>
								Add video
								<div className="bi bi-chevron-down float-right mt-1"><i className="fa fa-plus"></i></div>
							</button>
							<div className="panel-collapse collapse text-center"  id={"add_" + playlist?.publicid}>
								<div className="col-xl-8 mx-auto border mt-2 mb-2 p-2">
									{ playlist && <AddVideoForm playlist={playlist} />}
								</div>
							</div>
						</li>
						{
							playlist?.videos && playlist?.videos.map((video, index) => {
								return (<VideoItem key={index} video={video} index={index} indexPlaylist={1}/>)
							})
						}
						</ul>
						<KeywordsList keywords={playlist?.keywords}/>
					</div>
				</div>
			</div>);
	
}


export default  PlaylistItemDetails;
