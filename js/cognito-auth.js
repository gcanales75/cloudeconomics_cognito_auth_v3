/* (1) For AWS Cognito Authentication */
var userPoolId = 'us-east-1_URs9xI1kz'
var clientId = 'ei5gne42deoph24kkvaucp5mq'

var poolData = { UserPoolId : userPoolId,
ClientId : clientId
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

function checkLogin(redirectOnRec, redirectOnUnrec){
    var cognitoUser = userPool.getCurrentUser();
    if (cognitoUser != null) {
      console.log('user exists');
      if (redirectOnRec) {
        //window.location = './index.html';
      } else {
        $('#body').css({'visibility':'visible'});
      }
    } else {
      if (redirectOnUnrec) {
        window.location = 'https://cloudeconomics.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=ei5gne42deoph24kkvaucp5mq&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d1vyhq931i0cwf.amplifyapp.com%2F';
      }
    }
  }