const express = require("express")
const router = express.Router()
const industri = require("../controller/daftar_magang")
const multer = require('multer');
const multerDiskStorage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/');
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

router.post("/daftar", multerUpload.single('picture'), industri.registerIntership)
router.post("/", industri.registerIndustri)
router.get("/ver", industri.findIndustri1)
router.get("/notver", industri.findIndustri0)
router.get("/daftar/ver", industri.findIntership1)
router.get("/daftar/notver", industri.findIntership0)
router.get("/intership", industri.daftarIndustri)
router.get("/surat/:nama", industri.findImage)
router.get("/surat1/:name", industri.download);
router.get("/status/:nim", industri.findStatus);
router.put("/:id", industri.updateIndustri)
router.put("/daftar/:id", industri.updateIntership)
router.delete("/daftar/:id", industri.tolakIntership)

module.exports = router