var express = require("express");
var router = express.Router();
var multer = require("multer");
var config = require("config");
const AWS = require("aws-sdk");
const Busboy = require("busboy");
//var upload = multer({ dest: "uploads/" });
var Buffer = require("buffer/").Buffer;
var isBuffer = require("is-buffer");
var Blob = require("blob");
const request = require("request");
const BUCKET_NAME = "altcabs-server";
const IAM_USER_KEY = config.get("iamUser");
const IAM_USER_SECRET = config.get("iamSecret");
const fs = require("fs");

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
      Body: file.data,
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
  var busboy = new Busboy({ headers: req.headers });
  // The file upload has completed
  busboy.on("finish", function () {
    console.log("Upload finished");
    console.log("REQ: ", req.body);
    console.log("FILES: ", req.files);
    console.log("DATA: ", req.data);
    // const file = req.files.file;
    // console.log(file);
    // uploadToS3(file);
  });
  req.pipe(busboy);
  //res.send("respond with a resource");
});

//List all objects in bucket
// router.get("/", (req, res) => {
//   var bucketParams = {
//     Bucket: BUCKET_NAME,
//   };

//   let s3bucket = new AWS.S3({
//     accessKeyId: IAM_USER_KEY,
//     secretAccessKey: IAM_USER_SECRET,
//     Bucket: BUCKET_NAME,
//   });

//   s3bucket.listObjects(bucketParams, function (err, data) {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       console.log("Success", data);
//       res.send(data);
//     }
//   });
// });

router.get("/", (req, res) => {
  console.log("Inside");
  var bucketParams = {
    Bucket: BUCKET_NAME,
    Key: `pp.jpg`,
  };

  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME,
  });

  s3bucket.getObject(bucketParams, async function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
      // console.log("CHECKING IS BUFFER: ", isBuffer(data.Body));
      fs.writeFileSync("./ali.jpg", data.Body);
      const filePath = "ali.jpg";
      const result = await res.download(filePath);
      console.log("RESULT", result);
    }
  });
});

function updateObject(file) {
  console.log("Uploading", IAM_USER_SECRET, file);
  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME,
  });
  var params = {
    Bucket: BUCKET_NAME,
    Key: `${file.name}`,
    Body: file.data,
  };

  s3bucket.putObject(params, function (err, data) {
    if (err) {
      console.log("error in callback");
      console.log(err);
    }
    console.log("success");
    console.log(data);
  });
}

router.put("/update", (req, res) => {
  var busboy = new Busboy({ headers: req.headers });
  // The file upload has completed
  busboy.on("finish", function () {
    console.log("Upload finished");
    console.log("REQ: ", req.body);
    console.log("FILES: ", req.files);
    console.log("DATA: ", req.data);
    const file = req.files.file;
    console.log(file);
    // uploadToS3(file);
    updateObject(file);
  });
  req.pipe(busboy);
});

router.delete("/", (req, res) => {
  console.log("Inside");

  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME,
  });
  var params = {
    Bucket: BUCKET_NAME /* required */,
    Key: "1622706470180Screenshot (194).png",
  };

  s3bucket.deleteObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else {
      console.log(data);
      res.send(data);
    } // successful response
    /*
    data = {
    }
    */
  });
});

module.exports = router;
