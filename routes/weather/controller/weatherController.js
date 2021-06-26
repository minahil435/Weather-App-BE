const Location = require("../model/Location");

async function getAllLocations(req, res) {
  try {
    let allLocation = await Location.find({});
    res.json({ payload: allLocation });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}

async function addLocation(req, res) {
  console.log(req.body);

  try {
    let createdLocation = new Location({
        location: req.body.location
    });

    let savedlist = await createdLocation.save();
    res.json({ payload: savedlist });

  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}


async function deleteLocation(req, res) {
  try {
    let deletedLocation = await Location.findByIdAndRemove(req.params.id);

    res.json({ payload: deletedLocation });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}

module.exports = {
    getAllLocations,
    addLocation,
    deleteLocation,
};
