var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const url = 'http://jeffau.com/hci';
function UrlExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  if (http.status == 404) {
    console.log("it's 404!");
    alert('jeffau.com is down. This is the backup site');
  }
  //  do something
  else console.log('not 404');
  //   redirect(url);
}

UrlExists(url);
