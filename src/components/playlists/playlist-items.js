import React from 'react';
import PropTypes from 'prop-types';
import PlaylistItem from './playlist-item';

function PlaylistItems(props) {
  const { playlists } = props;

  return (
    <>
      <div className="carousel slide" data-ride="carousel" id="carousel-1" data-interval="false">
        <div className="carousel-inner" role="listbox">
          {
          playlists && playlists.map((playlist, index) => (<PlaylistItem key={index} index={index} playlist={playlist} active={index === 0} />))
        }
        </div>

        <ol className="carousel-indicators">
          {
          playlists && playlists.map((playlist, index) => (<li key={index} data-target="#carousel-1" data-slide-to={index.toString()} className={index === 0 ? 'active' : ''} />))
        }
        </ol>
      </div>
      <div>
        <a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next">
          <span className="carousel-control-next-icon" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

PlaylistItems.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isPublic: PropTypes.bool,
      passPhrase: PropTypes.string,
      words: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }),
      ),
      videos: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          link: PropTypes.string,
          uniqueid: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
};

export default PlaylistItems;
