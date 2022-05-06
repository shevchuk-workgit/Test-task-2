const beerApiServer = fetch("https://random-data-api.com/api/beer/random_beer")
  .then((res) => res.json())
  .catch((error) => console.log("USER API ERROR: ", error));

export default beerApiServer;