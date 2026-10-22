const Country = require("./Country");
const City = require("./City");
const Address = require("./Address");

Country.hasMany(City, {
  foreignKey: "countryId",
  as: "cities",
});

City.belongsTo(Country, {
  foreignKey: "countryId",
  as: "country",
});

Address.belongsTo(City, {
  foreignKey: "id",
  as: "addressCity",
});


module.exports = { Country, City,Address };