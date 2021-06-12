var express = require("express");
var router = express.Router();
var multer = require("multer");
var config = require("config");
const AWS = require("aws-sdk");
//var upload = multer({ dest: "uploads/" });

const BUCKET_NAME = "altcabs-server";
const IAM_USER_KEY = config.get("iamUser");
const IAM_USER_SECRET = config.get("iamSecret");

function uploadToS3(file) {
  console.log("Uploading", IAM_USER_SECRET, file);
  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME,
  });
  s3bucket.createBucket(function () {
    var params = {
      Bucket: BUCKET_NAME,
      Key: `foldername1/${file.name}`,
      Body: file,
    };
    s3bucket.upload(params, function (err, data) {
      if (err) {
        console.log("error in callback");
        console.log(err);
      }
      console.log("success");
      console.log(data);
    });
  });
}

/* GET users listing. */
var storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, "public");
  //   },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage }).single("file");

router.post("/", function (req, res, next) {
  //   console.log("BODY: ", req, req.files);
  //   res.send("Ok");
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return console.log("ERROR: ", err);
    } else if (err) {
      return console.log("ERROR: ", err);
    }
    console.log("REq", req.file);
    uploadToS3(req.file);
    return res.status(200).send(req.file);
  });
  //res.send("respond with a resource");
});

module.exports = router;
