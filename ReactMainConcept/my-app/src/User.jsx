import React, { useEffect, useState } from "react";
import { createContext } from "react";
import UserProfile from "./UserProfile";

const initialAddress = () => {
  return {
    nation: "Viet Nam",
    city: {
      street: "200 dien",
      house: "HouseHold",
    },
  };
};

const getAddress = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        nation: "USA",
        city: {
          street: "100 Nicolas Street",
          house: "HouseHold",
        },
      });
    }, 3000);
  });
};
export const UserContext = createContext();
export default function User() {
  const [firstName, setFirstName] = useState("Alex");
  const [age, setAge] = useState(25);
  //  initialAddress chay đầu tiên thôi
  const [address, setAddress] = useState(initialAddress);
  const handleChange = () => {
    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city };
      newCity.street = "100 dien";

      return {
        // bảo lưu prevAddress để ko mất nation
        ...prevAddress,
        city: newCity,
      };
    });
  };
  // Giống component diđUpate, effect function chạy lại mỗi khi comp re render

  useEffect(() => {
    // truy cập dc vào dom thật
    console.log("render api");
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...prevAddress };
        // Muốn thay đổi city thôi, nation giữ nguyên
        newAddress.city = res.city;
        return newAddress;
      });
    });
    console.log("render");
  }, []);
  return (
    <div>
      <h1>User Functional component</h1>
      <UserContext.Provider
        value={{
          firstName,
          age,
          address,
          handleChange,
        }}
      >
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
}
