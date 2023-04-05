export const getUser = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          name: "Ngo Tan Khoa",
          age: 22,
          address: "Da Nang",
        },
        status: 200,
      });
    }, 1500);
  });
