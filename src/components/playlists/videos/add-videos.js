import React from "react";
import TextInput from "../../common/text-input";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNewVideoPlaylist } from "../../../actions/playlist-actions";

class AddVideoForm extends React.Component {
  
  constructor(props) {
		super(props);
		this.state = {
			errorMessage: ""
		}
  }
  
  addNewVideo = (publicid, video) => {
		this.props.addNewVideoPlaylist(publicid, video);
  }
  
  handleChangeName = (e) => {
    this.props.newVideo.name = e.target.value;
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
    return (
      <form onSubmit={() => this.addNewVideo(this.props.playlist.publicid, this.props.newVideo)}>
        <TextInput id="name" label="Name"name="Name" onChange={(e) => this.handleChangeName(e)} value={this.props.newVideo.name}/>
        <TextInput id="link" label="Link" onChange={(e) => this.handleChangeLink(e)} error={this.state.errorMessage} name="Link" value={this.props.newVideo.link}/>
  
        <input disabled={this.state.errorMessage === "" ? "" : "disabled" } type="submit" value="Save" className="btn btn-primary" />
      </form>
    );
  }
}

AddVideoForm.propTypes = {
  playlist: PropTypes.object.isRequired
};


const mapStateToProps = state => {
	return {
		newVideo: { 
			name: "",
			link: ""
		}
	}
  }



const mapDispatchToProps = {
	addNewVideoPlaylist
  };

export default connect(mapStateToProps, mapDispatchToProps)(AddVideoForm);
