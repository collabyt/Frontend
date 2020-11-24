import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

function AddVideos (props) {

 /*  const [ isPublic, setPublic ] = useState(true);
  const checkPublicPlaylist = (e) => {
    setPublic(e.target.value === "true");
    this.props.newPlaylist.isPublic = (e.target.value === "true");
  } */

  return (
        <>
            <div className="input-group">
                <input type="text" class="form-control" placeholder="Add Videos" />
                <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                    <i className="fa fa-plus"></i>
                </button>
                </div>
            </div>
        </>
  );
}

AddVideos.propTypes = {
    videos: PropTypes.arrayOf(
        PropTypes.shape({
        link: PropTypes.string
        })
        )
}

const mapStateToProps = state => {
	return {
	}
}

export default  connect(mapStateToProps, null)(AddVideos);


