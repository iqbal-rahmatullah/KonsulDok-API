const express = require("express")
const router = express.Router()
const { verifyToken, veryfiPasien } = require("../middleware/verifyToken")
const FavoriteController = require("../controller/FavoriteController")

router
  .route("/")
  .get(veryfiPasien, FavoriteController.getFavorite)
  .post(veryfiPasien, FavoriteController.addFavorite)
  .delete(veryfiPasien, FavoriteController.deleteFavorite)
router.get("/check", verifyToken, FavoriteController.checkFavorite)
router.get("/count/:doctor_id", verifyToken, FavoriteController.countFavorite)

module.exports = router
