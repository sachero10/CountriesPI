const { Router } = require("express");
const getCountries = require("../controllers/getCountries");
const getCountryById = require("../controllers/getCountryById");
const createActivity = require("../controllers/createActivity")

const router = Router();

router.get("/countries", getCountries);
router.get("/countries/:id", getCountryById);
router.post("/countries", createActivity);

module.exports = router;
