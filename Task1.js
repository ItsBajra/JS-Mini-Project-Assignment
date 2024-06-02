function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        { id: 2216044, name: "Bajra", age: 21 },
        { id: 1234567, name: "Aditya", age: 20 },
        { id: 3213346, name: "Sandip", age: 12 },
      ];
      resolve(data);
    }, 2000);
  });
}

fetchData().then((users) => {
  console.log(users);
});
