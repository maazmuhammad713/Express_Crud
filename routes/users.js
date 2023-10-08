var express = require("express");
var router = express.Router();

const {
  getResources,
  getResourceByID,
  addResource,
  updateResource,
  deleteResource,
} = require("../controller/resource/resourceController");

/* GET users listing. */
router.get("/resources", getResources);
router.get("/resource/:id", getResourceByID);
router.post("/addResource", addResource);
router.put("/updateResource/:id", updateResource);
router.delete("/deleteResource/:id", deleteResource);

module.exports = router;
