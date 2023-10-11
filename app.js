const express = require('express');
const app = express();
var colors = require('colors');
const port = 6044;
const requestHandler = require('./util/requestHandler.js');

app.get('/authorise', function (req, res) {
  console.log('===================================== AUTHORISE =====================================');
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  var data = req.query;

  console.log('data = req.query', req.query);
  var qrCodeUrl = data.qrCodeUrl;

  console.log('qrCodeUrl',qrCodeUrl);

  var token = JSON.parse(data.token).id_token;

  console.log();
  console.log();
  console.log();
  console.log('token',token);

  getAuthCode(token, qrCodeUrl)
    .then(authCodeResult => {
      res.send(authCodeResult);
    }).catch(error => {
      console.log(error);
      res.status(error.statusCode).send(error.msg.error);
    })

  console.log('===================================== AUTHORISE - END =====================================');
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
});


app.listen(port, () => console.log(`Mock VERIFY server listening on port ${port}!`.grey))
var getAuthCode = function (mockPassToken, qrCodeUrl) {

  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log('getAuthCode');
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();


  var request = {
    "domain": "sandbox.api.myinfo.gov.sg",
    "requestPath": "/sgverify/v2/authorise?qrcodeurl=" + encodeURIComponent(qrCodeUrl),
    "headers": {
      "Authorization": "Bearer " + mockPassToken
    },
    "method": "GET"
  };

  console.log('request:', request);
  console.log();
  console.log();
  console.log();
  console.log();
  return requestHandler.getHttpsResponse(request.domain, request.requestPath, request.headers, request.method, "");
};