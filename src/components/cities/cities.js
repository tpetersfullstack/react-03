import React, { Component } from "react";
import "./cities.css";
import { Community } from "./citiesPSC.js";
import CitiesCard from "./citiesCard.js";
import fetch_function from "./fetch.js";

class Cities extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      latitude: "",
      longitude: "",
      population: "",
      northernMost: "",
      southernMost: "",
      totalPopulation: ""
    };
    this.key = 0;
    this.citiesManager = new Community();
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCreateNewCity = () => {
    this.key += 1;
    const newCity = this.citiesManager.createCity(
      this.key,
      this.state.nameInput,
      this.state.latitude,
      this.state.longitude,
      this.state.population
    );
    fetch_function.addCity(newCity);
    this.calculate();

    this.setState({
      nameInput: "",
      latitude: "",
      longitude: "",
      population: ""
    });

    console.log(this.citiesManager);
  };

  handleDelete = currentKey => {
    console.log("In handle Delete");
    this.citiesManager.deleteCity(currentKey);
    console.log(this.citiesManager.cities);
    this.calculate();
    this.setState({
      nameInput: "",
      latitude: "",
      longitude: "",
      population: ""
    });
  };

  calculate = () => {
    //New's said fix this!!! add if statement to check if x is undefine. If not (has data), do the setsate
    console.log(this.citiesManager);
    let x = this.citiesManager.getMostNorthern();
    console.log(x);
    // this.setState({
    //   whichSphere: this.citiesManager.whichSphere(this.state.latitude),
    //   northernMost: this.citiesManager.getMostNorthern().latitude,
    //   southernMost: this.citiesManager.getMostSouthern().latitude,
    //   totalPopulation: this.citiesManager.getPopulation(),
    // })
    // console.log(this.citiesManager.whichSphere());
  };

  renderCards = () => {
    return this.citiesManager.cities.map(cityEach => {
      console.log(cityEach.key);
      return (
        <CitiesCard
          key={cityEach.key}
          // key={cityEach.name}
          city={cityEach}
          calculate={this.calculate}
          removeCity={this.handleDelete}
        />
      );
    });
  };

  render() {
    return (
      <section>
        <h2> My Cities </h2>
        <div id="idPanelContainer">
          <div id="idLeftPanel" className="leftPanel">
            Cities Manager
            <input
              id="input1"
              type="text"
              placeholder="Add a City Name"
              name="nameInput"
              value={this.state.nameInput}
              onChange={this.handleInputChange}
            />
            <input
              id="input2"
              type="number"
              placeholder="Add latitude"
              name="latitude"
              value={this.state.latitude}
              onChange={this.handleInputChange}
            />
            <input
              id="input3"
              type="number"
              placeholder="Add longitude"
              name="longitude"
              value={this.state.longitude}
              onChange={this.handleInputChange}
            />
            <input
              id="input4"
              type="number"
              placeholder="Add population"
              name="population"
              value={this.state.population}
              onChange={this.handleInputChange}
            />
            <button
              className="addBalance"
              id="idAddBalance"
              onClick={this.handleCreateNewCity}
            >
              Create New City
            </button>
            {/* <h2> Account List </h2> */}
            {this.renderCards()}
          </div>

          <div id="idRightPanel" className="rightPanel">
            {" "}
            City Statistics
            <h3 id="display">
              Which sphere is the city in? : {this.state.whichSphere}
            </h3>
            <h3 id="display">
              The northern most city is: {this.state.northernMost}
            </h3>
            <h3 id="display">
              The southern most city is: {this.state.southernMost}
            </h3>
            <h3 id="display">
              The total population of all cities is:{" "}
              {this.state.totalPopulation}
            </h3>
          </div>
        </div>
      </section>
    );
  }
}

export default Cities;
