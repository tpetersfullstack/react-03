class City {
  constructor(key, name, latitude, longitude, population) {
    this.key = key;
    this.name = name;
    this.latitude = Number(latitude);
    this.longitude = Number(longitude);
    this.population = Number(population);
  }

  show() {
    return `${this.name} is located at lat ${this.latitude}
    long ${this.longitude} and it has a population of ${this.population}`;
  }

  movedIn(number) {
    this.population += number;
  }

  movedOut(number) {
    this.population -= number;
  }

  howBig(population) {
    if (this.population > 100000) {
      return "City";
    }
    if (this.population >= 20000) {
      return "Large town";
    }
    if (this.population >= 1000) {
      return "Town";
    }
    if (this.population > 100) {
      return "Village";
    }
    if (this.population >= 1) {
      return "Hamlet";
    }
  }
}

class Community {
  constructor() {
    this.cities = [];
  }

  createCity(key, name, latitude, longitude, population) {
    const city = new City(key, name, latitude, longitude, population);
    this.cities.push(city);
    return city;
  }

  deleteCity(key) {
    const citiesArr = this.cities.filter(city => city.key !== key);
    this.cities = citiesArr;
  }

  whichSphere(latitude) {
    if (latitude > 0) {
      return "Northern Hemisphere";
    } else {
      return "Southern Hemisphere";
    }
  }

  getMostNorthern() {
    return this.cities.slice().sort((a, b) => b.latitude - a.latitude)[0];
  }

  getMostSouthern() {
    return this.cities.sort((a, b) => a.latitude - b.latitude)[0];
  }

  getPopulation() {
    return this.cities.reduce((acc, cur) => acc + cur.population, 0);
  }
}

export { City, Community };
