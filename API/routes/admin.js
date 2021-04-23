const express = require("express")
const router = express.Router()
const crudadmin = require("../controller/crudadmin")

router.get("/", crudadmin.findAll)
router.get("/:id", crudadmin.findId)
router.get("/mhs/:id", crudadmin.findNim)
router.post("/", crudadmin.createUser)
router.put("/:id", crudadmin.editUser)
router.delete("/:id", crudadmin.deleteUser)
module.exports = router