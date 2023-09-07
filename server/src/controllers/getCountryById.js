const { Activity, Country } = require("../db");
const axios = require("axios");

const getCountryById = async (req, res) => {
  const { id } = req.params;
  const idPais = id.toUpperCase();
  try {
    const country = await Country.findByPk(idPais, {
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] }, //para que no muestre nada de la tabla intermedia
      },
    });
    return res.status(200).json(country);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCountryById;
