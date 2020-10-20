import React from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

function AddVideoForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput id="name" label="Name" onChange={props.onChange} name="Name" value={props.video.name}/>
      <TextInput id="link" label="Link" onChange={props.onChange} name="Link" value={props.video.link}/>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

AddVideoForm.propTypes = {
  video: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AddVideoForm;
