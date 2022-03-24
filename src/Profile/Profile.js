import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  props.handleName(`I m  ${props.fullName} `);
  return (
    <>
      <img src={props.src} alt="" />
      {props.children}
      <h2>{props.fullName}</h2>
      <h3>I am a {props.profession}</h3>
      <p style={{fontstyle: "URW Chancery L, cursive"	}}> {props.bio}</p>
     </>
  );
};

Profile.defaultProps = {
  fullName: " Filali Khaldoun",
  profession: "Full Stack Developer",
  bio:"A Full Stack Developer  ",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string,
  bio: PropTypes.string,
  src: PropTypes.string,
};
export default Profile;
