const { Router } = require("express");
const getCountries = require("../controllers/getCountries");
const getCountryById = require("../controllers/getCountryById");

const router = Router();

router.get("/countries", getCountries);
router.get("/countries/:id", getCountryById);

module.exports = router;
