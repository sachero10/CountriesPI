const { Router } = require("express");
const getCountries = require("../controllers/getCountries");
const getCountryById = require("../controllers/getCountryById");
const createActivity = require("../controllers/createActivity");
const getActivities = require("../controllers/getActivities");

const router = Router();

router.get("/countries", getCountries);
router.get("/countries/:id", getCountryById);
router.post("/countries", createActivity);
router.get("/activities", getActivities);

module.exports = router;
