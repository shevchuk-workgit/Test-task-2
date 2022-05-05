 
 
 
 const  userApiServer =  fetch("https://random-data-api.com/api/users/random_user").then(
  (res) => res.json()
).catch((error)=>console.log('USER API ERROR: ', error));

export default userApiServer;
