console.log("hello world")

function generateBase64() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var credentials = username + ":" + password;
  return btoa(credentials);
}

function tag() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var base64 = generateBase64()
  myHeaders.append("Authorization", "Basic " + base64);
  myHeaders.append("Cookie", "atlassian.xsrf.token=BQU8-BJ0D-2S4S-4H4F_c21beea91b5c876563c6d6bda9a184016601d924_lin");

  var raw = JSON.stringify({
    "update": {
      "fixVersions": [
        {
          "add": {
            "name": "Edge.2023.3"
          }
        }
      ]
    }
  });

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://n-side.atlassian.net/rest/api/3/issue/EDGE-6892", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}