import React, { useState, useEffect } from "react";

import { getUser } from "../api";
import useUser from "../useUser";
const Navigation = () => {
  //   const [user, setUser] = useState({});
  //   useEffect(() => {
  //     getUser().then((res) => {
  //       setUser(res.data);
  //     });
  //   }, []);
  const user = useUser();
  return <div>Navigation {user?.name}</div>;
};

export default Navigation;
