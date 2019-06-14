const multer = require("multer");
const patch = require("path");

module.exports = {
  storage: new multer.diskStorage({
    destination: patch.resolve(__dirname, "..", "..", "uploads"),
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  })
};
