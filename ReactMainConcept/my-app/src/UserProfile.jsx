import React from "react";
import { useContext } from "react";
import Profile from "./Profile";
import { UserContext } from "./User";

const UserProfile = () => {
  const { handleChange } = useContext(UserContext);
  return (
    <div>
      <Profile />
      <button onClick={handleChange}>Change street</button>
    </div>
  );
};

export default UserProfile;
