import fetch_function from "./fetch";
import Community from "./citiesPSC.js";
const url = "http://localhost:5000/";

// global.fetch = require('node-fetch');

const calgary = {
  key: 1,
  name: "Calgary",
  latitude: 51.05,
  longitude: -114.05,
  population: 1200000
};
const edmonton = {
  key: 2,
  name: "Edmonton",
  latitude: 53.55,
  longitude: -113.49,
  population: 2200000
};
const redDeer = {
  key: 3,
  name: "Red Deer",
  latitude: 52.28,
  longitude: -113.81,
  population: 20000
};

test("test that the addCity works", async () => {
  //clear database
  let data = await fetch_function.clearAllCities();
  console.log(data);
  expect(data.status).toEqual(200);

  //add a city in database
  data = await fetch_function.addCity(calgary);
  console.log(data);
  expect(data.status).toEqual(200);

  data = await fetch_function.addCity(edmonton);
  console.log(data);
  expect(data.status).toEqual(200);
});

test("test that load works", async () => {
  let data = await fetch_function.getAllCities();

  data = await fetch_function.getAllCities(url + "add", calgary);
  data = await fetch_function.getAllCities(url + "add", edmonton);
  data = await fetch_function.getAllCities(url + "all");
  console.log(data);
  expect(data.status).toEqual(200);
  expect(data.length).toBe(2);
});

test("test that updateCityPop works", async () => {
  const province = new Community([]);
  await fetch_function.postData(url + "clear");
  let newCity = province.createCity(7, "Caroline", 52.09, -114.74, 500);
  await fetch_function.addData(newCity);

  let data = await fetch_function.postData(url + "all");
  expect(data.status).toEqual(200);
  expect(data[0].pop).toBe(500);

  province.getCity(7).movedIn(600);
  fetch_function.updateData(province.getCity(7));

  data = await fetch_function.postData(url + "all");
  expect(data.status).toEqual(200);
  expect(data[0].pop).toBe(1100);

  province.getCity(7).movedOut(100);
  fetch_function.updateData(province.getCity(7));

  data = await fetch_function.postData(url + "all");
  expect(data.status).toEqual(200);
  expect(data[0].pop).toBe(1000);

  expect(province.cityList[0]).toEqual(data[0]);
});

test("test that delete works", async () => {
  let data = await fetch_function.clearAllCities();
  console.log(data);
  expect(data.status).toEqual(200);

  data = await fetch_function.addCity(calgary);
  console.log(data);
  console.log(data.length);
  expect(data.status).toEqual(200);

  // data = await fetch_function.deleteCity();
  // const cityManager = new Community();

  data = await fetch_function.deleteCity(url + "delete", 1);
  // data = await fetch_function.deleteCity(url + "delete", { "key": 2 });
  console.log(data);
  expect(data.status).toEqual(200);
  expect(data.length).toBe(0);
});
