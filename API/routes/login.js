const express = require("express")
const router = express.Router()
const login = require("../controller/login")

router.post("/", login.loginAuth)
router.get("/:id", login.loginAuthId)
//router.get("/", login.loginAuth)
module.exports = router