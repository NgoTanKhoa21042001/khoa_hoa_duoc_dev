import React, { useState, useEffect } from "react";

import { getUser } from "../api";
import useUser from "../useUser";
const Cart = () => {
  // const [user, setUser] = useState({});
  // useEffect(() => {
  //   getUser().then((res) => {
  //     setUser(res.data);
  //   });
  // }, []);

  const user = useUser();

  return <div>Cart {user.name}</div>;
};

export default Cart;
