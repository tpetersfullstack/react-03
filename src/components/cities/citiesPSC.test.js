import { City, Community } from "./citiesPSC";

const calgary = new City(1, "Calgary", 51.0447, -114.0719, 1250000);
const edmonton = new City(2, "Edmonton", 53.5461, -113.4938, 981280);
const timmins = new City(3, "Timmins", 48.4758, -81.3305, 41788);
const mapuca = new City(4, "Mapuca", 15.5937, 73.8142, 39989);

describe("Check City Tests", () => {
  test("Check City", () => {
    expect(calgary.key).toEqual(1);
    expect(calgary.name).toEqual("Calgary");
    expect(calgary.latitude).toEqual(51.0447);
    expect(calgary.longitude).toEqual(-114.0719);
    expect(calgary.population).toEqual(1250000);
  });

  test("Check movedIn", () => {
    calgary.movedIn(13678);
    expect(calgary.population).toEqual(1263678);
  });

  test("Check movedOut", () => {
    calgary.movedOut(7430);
    expect(calgary.population).toEqual(1256248);
  });

  test("Check show", () => {
    calgary.show();
    expect(calgary.population).toEqual(1256248);
  });
});

describe("Community Tests", () => {
  const communities = new Community([calgary, edmonton, timmins, mapuca]);

  test("Check Create city", () => {
    communities.createCity(1, "Calgary", 51.0447, 114.0719, 1250000);
    communities.createCity(2, "Edmonton", 53.5461, -113.4938, 981280);
    expect(communities.cities[0].name).toBe("Calgary");
    expect(communities.cities[1].name).toBe("Edmonton");
  });

  test("Check Delete city", () => {
    communities.createCity(1, "Calgary", 51.0447, 114.0719, 1250000);
    communities.createCity(2, "Edmonton", 53.5461, -113.4938, 981280);
    console.log(communities.cities);
    communities.deleteCity(1);
    console.log(communities.cities);
    expect(communities.cities.length).toEqual(1);
    expect(communities.cities[0].name).toEqual("Edmonton");
  });

  test("Check Population Total", () => {
    expect(communities.getPopulation()).toEqual(1962560);
  });

  test("Check Northernmost city", () => {
    communities.createCity(1, "Calgary", 51.0447, 114.0719, 1250000);
    communities.createCity(2, "Edmonton", 53.5461, -113.4938, 981280);
    communities.getMostNorthern();
    expect(communities.getMostNorthern()).toEqual({
      key: 2,
      latitude: 53.5461,
      longitude: -113.4938,
      name: "Edmonton",
      population: 981280
    });
  });

  test("Check Southernmost city", () => {
    communities.getMostSouthern();
    expect(communities.getMostSouthern()).toEqual({
      key: 2,
      latitude: 53.5461,
      longitude: -113.4938,
      name: "Edmonton",
      population: 981280
    });
  });
});
