import React, { useEffect, useState } from "react";

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
      a<h1>User Functional component</h1>
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
