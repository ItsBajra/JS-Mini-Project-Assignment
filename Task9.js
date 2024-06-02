function transformUsers(users) {
    let usersById = {};
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      usersById[user.id] = user;
    }
    return usersById;
  }
  
  const users = [
    { id: 2216044, name: "Bajra", age: 21 },
    { id: 1234567, name: "Aditya", age: 20 },
    { id: 3213346, name: "Sandip", age: 12 },
  ];
  
  console.log(transformUsers(users));
  