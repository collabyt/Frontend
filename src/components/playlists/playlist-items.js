import React from 'react';
import PropTypes from 'prop-types';
import PlaylistItem from './playlist-item';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function PlaylistItems(props) {

  const { playlists } = props

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  

  return (
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={false}
    keyBoardControl={true}
    customTransition="all .5"
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    deviceType={"desktop"}
  >
    {
      playlists && playlists.map((playlist, index) => (<PlaylistItem key={index} index={index} playlist={playlist} active={index === 0} />))
    }
    </Carousel>
  );
}

PlaylistItems.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
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
