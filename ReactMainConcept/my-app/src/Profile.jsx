import React, { useContext } from "react";
import { UserContext } from "./User";

const Profile = () => {
  // lấy từ UserContext
  const { firstName, age, address } = useContext(UserContext);
  return (
    <div>
      {" "}
      <ul>
        <li>First name: {firstName} </li>
        <li>Age {age}</li>
        <li>Nation: {address.nation}</li>
        <li>Street: {address.city.street}</li>
        <li>House: {address.city.house}</li>
      </ul>
    </div>
  );
};

export default Profile;
