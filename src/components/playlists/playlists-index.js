import React, { useEffect, useRef, useState } from 'react';
import PlaylistItems from './playlist-items';
import * as playlistsApi from '../../api/playlists-api';
import axios from 'axios';
import './playlists-index.css';


const PlaylistHome = () => {
  
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [playlists, setPlaylists] = useState([]);
  const isMounted = useRef();
  
   useEffect(() => {
    isMounted.current = true;
    loadData();

    return () => isMounted.current = false;
  }, [isMounted]);


  const loadData = async() => {
    let response = await axios.get(playlistsApi.getPlaylists(limit, offset));

    if (response.status == 200 && isMounted.current) {
      let data = response.data;
      
      setPlaylists(data);
    }
  }
  
 
  const handleMorePlaylist = async () => {
    if (playlists.length % 10 === 0) {
      offset = offset + limit;
      setOffset(offset);
      await loadData();
    }
  }

  return (
      <div className="d-flex flex-row">
      <div className="container d-flex flex-column">
        <button type="button" className="create-playlist btn btn-ouline-primary mb-3 w-25 align-self-end" data-toggle="modal" data-target="#createPlaylist">
          <i className="fa fa-plus mr-1" />Add playlist
        </button> 
        { 
          playlists.length > 0 ? 
            <PlaylistItems playlists={playlists} handleMorePlaylist={handleMorePlaylist} /> : <div />
        }
      </div>
      { <button type="button" className="create-playlist btn btn-ouline-primary align-self-center load-more-button mt-2" onClick={(e) => handleMorePlaylist()}>
        Load More
      </button> }
      </div>
    );
}


export default PlaylistHome;
