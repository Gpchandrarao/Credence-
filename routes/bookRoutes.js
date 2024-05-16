const express = require("express");
const bookControlls = require("../controllers/bookControlls");

const router = express.Router();

router.post("/create-movie", bookControlls.createMovieDetails);
router.get("/", bookControlls.getAllData);
router.get("/get-data-by-id/:id", bookControlls.getDataById);
router.put("/update-data-by-id/:id", bookControlls.updateDataById);
router.delete("/delete-data-by-id/:id", bookControlls.deleteDataById);

module.exports = router;
