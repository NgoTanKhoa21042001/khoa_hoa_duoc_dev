import React, { useEffect, useState } from "react";
import { getUser } from "./api";

const useUser = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data);
    });
  }, []);

  return user;
};

export default useUser;
