var aws = require('aws-sdk');

var AWS_S3_BUCKET = process.env.AWS_S3_BUCKET;
var AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
var AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;

aws.config.update( 
  { region : "eu-west-1" ,
    accessKeyId: AWS_ACCESS_KEY, 
    secretAccessKey: AWS_SECRET_KEY
  }
);


function signS3 (req,res) {
  var s3 = new aws.S3();
  var fileName = req.query['file-name'];
  var fileType = req.query['file-type'];
  var s3Params = {
    Bucket: AWS_S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, function (err, data) {
    if (err) {
      console.log(err);
      return res.end();
    }
    var returnData = {
      signedRequest: data,
      url: 'https://' + AWS_S3_BUCKET + '.s3.amazonaws.com/' + fileName
    };
    console.log(returnData);
    res.write(JSON.stringify(returnData));
    res.end();
  });
};   


module.exports = signS3;