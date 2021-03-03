import React, { useEffect, useRef, useState } from 'react';
import PlaylistItems from './playlist-items';
import * as playlistsApi from '../../api/playlists-api';
import axios from 'axios';

const PlaylistHome = () => {
  
  const childRef = useRef();
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [playlists, setPlaylists] = useState([]);
  const [isMounted, setMount] = useState(false);
  
   useEffect(() => {
    if (!isMounted) {
      loadData();
    }
  });

  /*useEffect(() =>{
    handleMorePlaylist();
  }, [childRef]) */
    
  const loadData = async () => {
    const response = await axios.get(playlistsApi.getPlaylists(limit, offset));
        
    if (response.data !== null) {
      setPlaylists(response.data);
      setMount(true);
    } 
  }
 
  const handleMorePlaylist = () => {
    if (playlists.length % 10 === 0 && childRef.current && childRef.current.counter % 10 === 0) {
      offset = offset + limit;
      setOffset(offset);
      this.loadPlaylists(limit, offset);
    }
  }

  return (
      <div className="container d-flex flex-column">
        <button type="button" className="create-playlist btn btn-ouline-primary mb-3 w-25 align-self-end" data-toggle="modal" data-target="#createPlaylist">
          <i className="fa fa-plus mr-1" />Add playlist
        </button> 
        { 
          playlists.length > 0 ? <PlaylistItems ref={childRef} playlists={playlists} handleMorePlaylist={handleMorePlaylist} /> : <div />
        }
      </div>
    );
}


export default PlaylistHome;
