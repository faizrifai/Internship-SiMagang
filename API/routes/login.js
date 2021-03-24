const express = require("express")
const router = express.Router()
const login = require("../controller/login")

router.post("/", crudadmin.loginAuth)
module.exports = router