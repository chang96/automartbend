const Router = require("express")
const router = Router()
const carControllers = require("../controllers/index")
router.get("/", carControllers.home)
router.post("/create", carControllers.addCars)

module.exports = router