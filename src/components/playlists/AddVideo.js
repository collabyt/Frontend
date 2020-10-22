import React from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

class AddVideoForm extends React.Component {
  
  constructor(props) {
		super(props);
		this.state = {
			errorMessage: ""
		}
	}

  handleChangeLink = (e) => {
    let regexYoutube = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = e.target.value.match(regexYoutube);
    if (match && match[7].length === 11) {
      this.props.video.uniqueId = match[7];
      this.props.video.link = e.target.value;
    } else if (e.target.value === "") {
      this.setState(prevState => ({ errorMessage: "" }));
    }else {
      this.setState(prevState => ({ errorMessage: "The YouTube link is not valid" }));
    }
  }
  
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <TextInput id="name" label="Name"name="Name" value={this.props.video.name}/>
        <TextInput id="link" label="Link" onChange={(e) => this.handleChangeLink(e)} error={this.state.errorMessage} 
          name="Link" value={this.props.video.link}/>
  
        <input disabled={this.state.errorMessage === "" ? "" : "disabled" } type="submit" value="Save" className="btn btn-primary" />
      </form>
    );
  }
  
}

AddVideoForm.propTypes = {
  video: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddVideoForm;
