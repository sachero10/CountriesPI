const axios = require("axios");
const { Op } = require("sequelize");
const { Country } = require("../db");
const { URL_BASE } = process.env;

const getCountries = async (req, res) => {
  const { countryName } = req.query;
  try {
    if (!countryName) {
      const countriesDB = await Country.findAll();
      if (countriesDB.length == 0) {
        const { data } = await axios(URL_BASE);
        for (let country of data) {
          const newCountry = await Country.create({
            id: country.cca3,
            name: country.name.common,
            flag: country.flags.png,
            continent: country.region,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
          });
        }
        const countriesBDD = await Country.findAll();
        return res.status(200).json(countriesBDD);
      }
    } else {
      const country = await Country.findAll({
        where: { name: { [Op.iLike]: `%${countryName}%` } },
      });
      return res.status(200).json(country);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCountries;
