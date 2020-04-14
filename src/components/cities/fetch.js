const url = "http://localhost:5000/";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });

  const json = await response.json(); // parses JSON response into native JavaScript objects
  json.status = response.status;
  json.statusText = response.statusText;
  // console.log(json, typeof(json));
  return json;
}

const fetch_function = {
  // https://github.com/larryevolveu/reference/blob/master/api/javascript/api.test.js
  // passing in the relevant object / object key
  async addCity(city) {
    return await postData(url + "add", city);
  },

  async deleteCity(ckey) {
    return await postData(url + "delete", { key: ckey });
  },

  async updateCityPop(city) {
    return await postData(url + "update", city);
  },

  async getAllCities() {
    return await postData(url + "all");
  },

  async clearAllCities() {
    return await postData(url + "clear");
  },

  async readCity(ckey) {
    return await postData(url + "read", { key: ckey });
  }
};

export default fetch_function;
