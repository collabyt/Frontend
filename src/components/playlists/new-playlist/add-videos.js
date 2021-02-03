import React from 'react';
import TextInput from '../../common/text-input';
import "./add-playlist.css";

class AddVideos extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			errorMessage: ""
		}
  }

  componentWillUnmount() {
      this.props.newVideo.link = '';
      this.props.newVideo.name = '';
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
      this.setState({ errorMessage: "" });
    }else {
      this.setState({ errorMessage: "The YouTube link is not valid" });
    }
  }

  handleChangeName = (e) => {
    this.props.newVideo.name = e.target.value;
  }

  render() {
    return (<div>
        <div className="input-group w-100 d-inline-flex flex-row justify-content-start">
          <div className="col-md-10">
            <TextInput id="name" label="Name"name="Name" onChange={(e) => this.handleChangeName(e)} value={this.props.newVideo.name}/>
            <TextInput id="link" label="Link" onChange={(e) => this.handleChangeLink(e)} error={this.state.errorMessage} name="Link" value={this.props.newVideo.link}/>
          </div>
          <div className="col-md-2 add-videos-modal">
            <div className="input-group-append">
                <button className="btn btn-secondary" type="button" onClick={(e) => this.props.addNewVideos(this.props.newVideo, e)}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
          </div>
        </div>
        <div className="text-left"  id="add_videos_modal">
          <ul>
          {
              this.props.videos && this.props.videos.map((video, key) => {
                return <li id={key}>{video.name}</li>
              })
          }
          </ul> 
        </div>
    </div>);
  }
  
}

export default AddVideos;


