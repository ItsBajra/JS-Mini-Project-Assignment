function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = Math.random() > 0.5; 
  
        if (success) {
          resolve("Data fetched successfully!"); 
        } else {
          reject("Failed to fetch data."); 
        }
      }, 2000); 
    });
  }
  
  fetchData()
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error);
    });
  