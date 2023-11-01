const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  let fooFighters;
  let daveGrohl;
  let updateBand;
  let updateDave;
  let deleteFoo;
  let deleteDave;

  beforeAll(async () => {
    console.log(fooFighters);
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
    fooFighters = await Band.create({
      name: "Foo Fighters",
      genre: "Rock",
    });
    daveGrohl = await Musician.create({
      name: "Dave Grohl",
      instrument: "Guitar",
    });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    expect(fooFighters instanceof Band).toBe(true);
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    expect(daveGrohl instanceof Musician).toBe(true);
  });

  //describe("Update tests", async () => {

  test("can update a Band", async () => {
    updateBand = await fooFighters.update({ genre: "Folk music" });
    expect(await updateBand.genre).toBe("Folk music");
  });

  test("can update a Musician", async () => {
    updateDave = await daveGrohl.update({ instrument: "Pan pipes" });
    expect(await updateDave.instrument).toBe("Pan pipes");
  });
  //});

  test("can delete a Band", async () => {
    deleteFoo = await fooFighters.destroy();
    expect(await deleteFoo.name).toBe("Foo Fighters");
  });

  test("can delete a Musician", async () => {
    deleteDave = await daveGrohl.destroy();
    expect(await deleteDave.name).toBe("Dave Grohl");
  });
});
