//import { env } from 'process';
//import * as express from 'express';
import * as AWS from 'aws-sdk';
const fs = require('fs');
const AccessKey = process.env.S3_ACCESS_KEY_ID;
const SecretAccess = process.env.S3_SECRET_ACCESS_KEY;
const BucketName = 'Hola_Test';

const s3 = new AWS.S3({ accessKeyId: AccessKey, secretAccessKey: SecretAccess });
const params = {
  Bucket: BucketName,
  CreateBucketConfiguration: {
    LocationConstraint: 'ap-northeast-2',
  },
};

s3.createBucket(params, function (err: Error, data: any) {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log('Bucket Created Successfully', data.location);
  }
});
