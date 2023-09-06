const {Activity, Country} = require("../db");
const { URL_BASE } = process.env;
const axios = require("axios");

const getCountryById = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    try {
        const country = await Country.findByPk(id);
        // const country = await Country.findOne({
        //     // include: {
        //     //     model: Activity,
        //     //     attributes: ["name", "difficulty", "duration","season"],
        //     //     through: {attributes: [],},
        //     // },
        //     where: {id:id},
        // });
        return res.status(200).json(country);
    } catch (error) {
    return res.status(500).json({ error: error.message });
        
    }
}

module.exports = getCountryById;
