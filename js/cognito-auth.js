/* (1) For AWS Cognito Authentication */
import {CognitoAuth} from 'amazon-cognito-auth-js';

var userPoolId = 'us-east-1_URs9xI1kz'
var clientId = 'ei5gne42deoph24kkvaucp5mq'
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;


        var authData = {
        UserPoolId: 'userPoolId',
        ClientId: 'clientId',
        RedirectUriSignIn : 'https://examole.com/login',
        RedirectUriSignOut : 'https://example.com/logout',
        AppWebDomain : 'example.com',
        TokenScopesArray: ['email']
        };
        var auth = new CognitoAuth(authData);
        auth.userhandler = {
        onSuccess: function(result) {
          //you can do something here
        },
        onFailure: function(err) {
            // do somethig if fail
        }
    };

    //get the current URL with the Hash that contain Cognito Tokens tokens    
    var curUrl = window.location.href;

    //This parse the hash and set the user on the local storage. 
    auth.parseCognitoWebResponse(curUrl);

console.log('Loading Cognito auth...');

var poolData = { UserPoolId : userPoolId,
  ClientId : clientId
  };
  
  console.log(poolData)

  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  var cognitoUser = userPool.getCurrentUser();
  var cognitoUser = userPool.getCurrentUser();
  
  console.log(userPool)
  console.log(cognitoUser)

/*
  function login(){
      var username = $('#username').val();
      var authenticationData = {
          Username: username,
          Password: $('#password').val()
      };
  
      // checking code
      console.log("Username:",username, "Password:",$('#password').val())
  
      var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
  
      var userData = {
          Username : username,
          Pool : userPool
      };
      var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  
      console.log(cognitoUser)
      cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: function (result) {
              var accessToken = result.getAccessToken().getJwtToken();
              // Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer
              // var idToken = result.idToken.jwtToken;
  
              console.log("Authentication successful", accessToken)
              window.location = './index.html'
          },
  
          onFailure: function(err) {
              console.log("failed to authenticate");
              console.log(JSON.stringify(err))
              alert("Failed to Log in.\nPlease check your credentials.")
          },
      });
  }
  console.log(userPool)

*/
  function checkLogin(redirectOnRec, redirectOnUnrec){
  
      var cognitoUser = userPool.getCurrentUser();
      if (cognitoUser != null) {
          console.log("user exists")
          if (redirectOnRec) {
              window.location = './index.html';
          } else {
              $("#body").css({'visibility':'visible'});           
          }
      } else {
          if (redirectOnUnrec) {
              window.location = 'https://cloudeconomics.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=ei5gne42deoph24kkvaucp5mq&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d1vyhq931i0cwf.amplifyapp.com%2F'
          } 
      }
  }
