import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class AddVideos extends React.Component {

  addVideoLink = (e) => {
    this.props.newVideo.link = e.target.value;
  }

  addNewVideos = () => {
    if (this.props.newVideo.link != '') {
         this.props.videos.push(this.props.videos.newVideo);
    }
  }

  componentWillUnmount() {
      this.props.newVideo.link = '';
      this.props.videos = [];
  }

  componentDidUpdate() {

  }

  handleChangeLink = (e) => {
    let regexYoutube = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = e.target.value.match(regexYoutube);
    if (match && match[7].length === 11) {
      this.props.newVideo.uniqueid = match[7];
      this.props.newVideo.link = e.target.value;
    } else if (e.target.value === "") {
      this.setState(prevState => ({ errorMessage: "" }));
    }else {
      this.setState(prevState => ({ errorMessage: "The YouTube link is not valid" }));
    }
  }

  render() {
    return (<>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Add Videos" onChange={(e) => this.handleChangeLink(e)} value={this.props.newVideo.link}/>
            <div className="input-group-append">
                <button className="btn btn-secondary" type="button" onClick={() => this.addNewVideos()}>
                    <i className="fa fa-plus"></i>
                </button>
                <div className="text-center"  id="add_videos_modal">
                   {
                       this.props.videos && this.props.videos.map((video, key) => {
                           return <span id={key}>{video.link}</span>
                       })
                   } 
                </div>
            </div>
        </div>
    </>);
  }
  
}

const mapStateToProps = state => {
	return {
        videos: [],
        newVideo: {link: ''}
	}
}

export default  connect(mapStateToProps, null)(AddVideos);


