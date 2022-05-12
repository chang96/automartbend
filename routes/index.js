const Router = require("express")
const router = Router()
const carControllers = require("../controllers/index")
router.get("/", carControllers.home)
router.post("/create", carControllers.addCars)
router.get("/all", carControllers.getAllCars)
router.delete("/delete", carControllers.deleteCars)

module.exports = router