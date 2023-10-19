const mySongControllers = require("../controllers/mySongController");

const router = require("express").Router();

router.get("/", mySongControllers.getListSong);
router.post("/create", mySongControllers.addSong);
router.delete("/delete/:id", mySongControllers.deleteSong);
router.put("/update/:id", mySongControllers.updateSong);

module.exports = router;
