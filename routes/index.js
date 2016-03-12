var express = require('express');
var router = express.Router();
var request = require('request');
require('dotenv').load();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/auth/linkedin', function(req, res) {
  var accessTokenUrl = 'https://www.linkedin.com/uas/oauth2/accessToken';
  var peopleApiUrl = 'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,email-address,picture-url)';
  var params = {
    grant_type: 'authorization_code',
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: process.env.LINKEDIN_SECRET,
    redirect_uri: req.body.redirectUri
  };
  console.log(params);

  // Step 1. Exchange authorization code for access token.
request.post(accessTokenUrl, { form: params, json: true }, function(err, response, body) {
  console.log('this is me localizing the problem');
  if (response.statusCode !== 200) {
    return res.status(response.statusCode).send({ message: body.error_description });
  }
  var params = {
    oauth2_access_token: body.access_token,
    format: 'json'
  };

  // Step 2. Retrieve profile information about the current user.
  request.get({ url: peopleApiUrl, qs: params, json: true }, function(err, response, profile) {
  });
});
});
module.exports = router;
