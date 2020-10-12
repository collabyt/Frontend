import React from "react";
import PropTypes from "prop-types";
import PlaylistItem from "./PlaylistItem";

function PlaylistItems(props) {
  let playlists = props.playlists;

  return (
    <div className="container">
        <div className="carousel slide" data-ride="carousel" id="carousel-1" data-interval="false">
          <div className="carousel-inner" role="listbox">
          {
            playlists && playlists.map((playlist, index) => {
              return (<PlaylistItem key={index} index={index} playlist={playlist} active={index === 0 ? true : false} />)
            })
          }
          </div>
   
          <ol className="carousel-indicators">
          {
            playlists && playlists.map((playlist, index) => {
              return (<li key={index} data-target="#carousel-1" data-slide-to={index.toString()} className={index === 0 ? "active" : ""}></li>)
            })
          }
          </ol>
        </div>
    <div>
	<a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev">
		<span className="carousel-control-prev-icon"></span>
		<span className="sr-only">Previous</span>
	</a>
	<a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next">
		<span className="carousel-control-next-icon"></span>
		<span className="sr-only">Next</span>
	</a>
</div>
</div>
  );
}

PlaylistItems.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
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
  ).isRequired
};

export default PlaylistItems;