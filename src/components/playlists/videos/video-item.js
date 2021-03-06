import React from 'react';
import PropTypes from 'prop-types';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleIcon: false,
    };
  }

  onClick() {
    this.setState((prevState) => ({ toggleIcon: !prevState.toggleIcon }));
  }

  render() {
    return (
      <li className="d-flex w-100 mb-1 flex-column">
        <button type="button" className="btn btn-ouline-primary text-left w-100" data-toggle="collapse" onClick={() => this.onClick()}
          data-parent={`#playlist_${this.props.indexPlaylist}`} href={`#video_${this.props.indexPlaylist}${this.props.index}`}>
          {this.props.video.name}
          <div className="bi bi-chevron-down float-right mt-1">
          {
						this.state.toggleIcon ?	<i className="fa fa-angle-up" /> : <i className="fa fa-angle-down" />
					}
          </div>
        </button>
        <div className="panel-collapse collapse text-center" id={`video_${this.props.indexPlaylist}${this.props.index}`}>
          <iframe
            name={`video_${this.props.index}`}
            title={`video_${this.props.index}`}
            id={`video_${this.props.index}`}
            type="text/html"
            width="700"
            height="375"
            src={`https://www.youtube.com/embed/${this.props.video.uniqueid}`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </li>
    );
  }
}

VideoItem.propTypes = {
  index: PropTypes.number.isRequired,
  indexPlaylist: PropTypes.number.isRequired,
  video: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    link: PropTypes.string,
    uniqueid: PropTypes.string,
  }).isRequired,
};

export default VideoItem;
