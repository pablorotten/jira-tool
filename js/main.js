console.log("hello world")

function generateBase64() {
  var username = document.getElementById("username").value;
  var apiKey = document.getElementById("apiKey").value;

  var credentials = username + ":" + apiKey;
  return btoa(credentials);
}

function tagWithFetch() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Basic " + generateBase64());

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

function tagWithXHR() {
  var data = JSON.stringify({
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

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("PUT", "https://n-side.atlassian.net/rest/api/3/issue/EDGE-6892");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Basic " + generateBase64());

  xhr.send(data);

}