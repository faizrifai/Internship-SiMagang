const express = require("express")
const router = express.Router()
const logbook = require("../controller/logbook")
const multer = require('multer');
const multerDiskStorage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/logbook');
  },
  filename: function(req, file, cb) {
      const originalName = file.originalname;
      const nameArr = originalName.split('.');
      var extension = '';
      if (nameArr.length > 1) {
          extension = nameArr[nameArr.length - 1];
      }
      // picture-5858737388484.jpg
      cb(null, file.fieldname +'-'+ Date.now() +'.'+extension);
  }
});

const multerUpload = multer({storage: multerDiskStorage});

router.post("/:logbookId", multerUpload.single('picture'), logbook.createLogbook)
router.put("/:id/:nama", multerUpload.single('picture'), logbook.editLogbook)
router.get("/:logbookId", logbook.findLogbook)
router.get("/gambar/:nama", logbook.findImage)
router.delete("/gambar/:nama/:id", logbook.deleteImage)

module.exports = router