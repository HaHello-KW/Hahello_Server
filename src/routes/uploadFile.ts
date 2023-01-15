//const fs = require('fs');
//const AWS = require('aws-sdk');
//const BucketName = '';
//const s3 = new AWS.S3({ accessKeyId: '', secretAccess: '' });
const uploadFile = (fileName: string) => {
  const fileContent = fs.readFileSync(fileName);
  const params = {
    Bucket: BucketName,
    Key: 'test.txt',
    Body: fileContent,
  };
  s3.upload(params, function (err: Error, data: any) {
    if (err) {
      throw err;
    } else {
      console.log(`File uploaded successfully. ${data.location}`);
    }
  });
};
uploadFile('C:User_Type/Type-A/A-1/A-1-1.png');
