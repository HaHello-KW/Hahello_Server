//const fs = require('fs');
//const AWS = require('aws-sdk');
//const BucketName = '';

//const s3 = new AWS.SE({ accessKeyId: '', secretAccessKey: '' });
const downloadFile = (fileName: any) => {
  const params = {
    Bucket: BucketName,
    Key: '',
  };
  s3.getObject(params, function (err: Error, data: any) {
    if (err) {
      throw err;
    }
    fs.writeFileSync(fileName, data.Body.toString());
  });
};
downloadFile('');
