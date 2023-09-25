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

// promise;
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
//     console.log(response);
//   });

//AXIOS;

// tạo một instance dùng đi dugnf lại
// const http = axios.create({
//   baseURL: "https://reqres.in/api",
// });

// // http.get("/users/2").then(function (res) {
// //   console.log(res);
// // });
// // tạo interceptor
// http.interceptors.response.use(
//   (config) => {
//     console.log(config);
//     return config.data.data;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// http.get("/users").then(function (res) {
//   console.log(res);
// });

const http = axios.create({
  // request config
  baseURL: "https://reqres.in/api",
});

http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (config) {
    // Do something before response is sent
    console.log(config, "response");
    return config.data.data;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

http
  .get("/users/2")
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });
