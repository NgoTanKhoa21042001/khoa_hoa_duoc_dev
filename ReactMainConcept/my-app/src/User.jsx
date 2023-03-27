import React, { useState } from "react";

const initialAddress = () => {
  return {
    nation: "Viet Nam",
    city: {
      street: "200 dien",
      house: "HouseHold",
    },
  };
};

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
  return (
    <div>
      <h1>User Functional component</h1>
      <ul>
        <li>First name: {firstName} </li>
        <li>Age {age}</li>
        <li>Nation: {address.nation}</li>
        <li>Street: {address.city.street}</li>
        <li>House: {address.city.house}</li>
        <button onClick={handleChange}>Change street</button>
      </ul>
    </div>
  );
}
