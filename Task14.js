function getAllUniqueHobbies(users) {
    const uniqueHobbies = users.reduce((accumulator, currentUser) => {
      return accumulator.concat(currentUser.hobbies);
    }, []);
  
    return Array.from(new Set(uniqueHobbies));
  }
  
  const users = [
    { name: 'Bajra', hobbies: ['GYM', 'gaming', 'boxing'] },
    { name: 'Aditya', hobbies: ['yapping', 'reading', 'GYM'] },
    { name: 'Sandip', hobbies: ['cleaning', 'Mopping'] }
  ];
  
  console.log(getAllUniqueHobbies(users));
  