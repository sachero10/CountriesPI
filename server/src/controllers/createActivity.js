const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const createActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, country } = req.body;
    if (!name || !difficulty || !duration || !season || !country) {
      return res.status(401).json({ error: "Faltan Datos" });
    }
    const [newAct, created] = await Activity.findOrCreate({
      where: { name: name },
      defaults: {
        difficulty: difficulty,
        duration: duration,
        season: season,
      },
    });
    // const countryData = await Country.findOne({
    //   where: { name: { [Op.iLike]: `%${country}%` } },
    // });
    for (let pais of country) {
      const countryData = await Country.findOne({
        where: { name: { [Op.iLike]: `${pais}` } },
      });
      if (!countryData)
        return res.status(400).json({ error: "No existe el País" });
      newAct.addCountries(countryData.id);
    }

    // if (!countryData)
    //   return res.status(400).json({ error: "No existe el País" });
    // newAct.addCountries(countryData.id);
    return res.status(200).json(newAct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createActivity;
