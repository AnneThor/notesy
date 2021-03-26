'use strict';

let submit = document.getElementById("sign-in-form");
submit.addEventListener("submit", function(event) {
  event.preventDefault();
  let form = event.target;
  let username = form.username.value;
  let password = form.password.value;
  // console.log("username and password: ", username, password);
  let encoded = btoa(username + ":" + password);
  // console.log("base64 encoded: ", encoded);
  form.username.value = '';
  form.password.value = '';
  var request = new XMLHttpRequest();
  request.open("POST", '/signin', true);
  request.setRequestHeader('Authorization', 'Basic ' + encoded);
  request.send();
})
