import React from "react";
import "../assets/css/UserAvatarContainer.css";
import {Link} from "react-router-dom";

function UserAvatarContainer({profileImage, userName}) {
  return (
    <Link to="/profile" className="user-avatar-container">
      {profileImage && (
        <img src={profileImage} alt="profileImage" className="avatar" />
      )}
      <span>{userName}</span>
    </Link>
  );
}

export default UserAvatarContainer;
