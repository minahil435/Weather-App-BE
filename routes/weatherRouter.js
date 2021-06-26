var express = require('express');
var router = express.Router();

const {
  getAllLocations,
  addLocation,
  deleteLocation,

} = require("./weather/controller/weatherController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(true);
});

router.get("/get-all-searched-locations", getAllLocations);
router.post("/add-location", addLocation);
router.delete("/delete-location-by-id/:id", deleteLocation);

 module.exports = router;