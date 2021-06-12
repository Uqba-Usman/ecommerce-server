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
    // Your files are stored in req.files. In this case,
    // you only have one and it's req.files.element2:
    // This returns:
    // {
    //    element2: {
    //      data: ...contents of the file...,
    //      name: 'Example.jpg',
    //      encoding: '7bit',
    //      mimetype: 'image/png',
    //      truncated: false,
    //      size: 959480
    //    }
    // }
    // Grabs your file object from the request.
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
  var bucketParams = {
    Bucket: BUCKET_NAME,
    Key: `foldername1/pp.jpg`,
  };

  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME,
  });

  s3bucket.getObject(bucketParams, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
      console.log("CHECKING IS BUFFER: ", isBuffer(data.Body));
      // var blob = new Blob([data.body]);
      // console.log("BLOB: ", blob);
      // res.download(data.body);
      res.send(data);
    }
  });
});

module.exports = router;
