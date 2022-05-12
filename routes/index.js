const Router = require("express")
const router = Router()
const carControllers = require("../controllers/index")
router.get("/", carControllers.home)

module.exports = router