console.log("hello world")

function generateBase64() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      var credentials = username + ":" + password;
      var encodedCredentials = btoa(credentials);

      console.log("Base64 encoded value: " + encodedCredentials);
}