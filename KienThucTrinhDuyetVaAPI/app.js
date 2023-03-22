// const xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const res = JSON.parse(this.responseText);
//     let html = "";

//     res.data.forEach((item) => {
//       html += `

//             <div>${item.email}</div>

//             <img src=${item.avatar} alt="" />
//         `;
//     });
//     document.getElementById("demo").innerHTML = html;
//     console.log(res);
//   }
// };
// xhttp.open("GET", "https://reqres.in/api/users", true);

// xhttp.send();

// test ve xmlHttpRequest

// promise
// fetch("https://reqres.in/api/users?page=2")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((response) => {
//     let html = "";

//     response.data.forEach((item) => {
//       html += `

//                <div>${item.email}</div>

//                <img src=${item.avatar} alt="" />
//            `;
//     });
//     document.getElementById("demo").innerHTML = html;
//   });

// AXIOS

// axios
//   .get("https://reqres.in/api/users?page=2")
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

const http = axios.create({
  baseURL: "https://reqres.in/api",
});

// http.get("/users/2").then(function (res) {
//   console.log(res);
// });

http.interceptors.response.use(
  (config) => {
    console.log(config);
    return config.data.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.get("/users/2").then(function (res) {
  console.log(res);
});
