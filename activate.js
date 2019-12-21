$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('code');
    request('https://company.com/api/emailactivation/' + myParam);
});

function request(url) {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            window.location.replace("https://doxalabs.co.uk/mail-confirmation");
        } else {
            window.location.replace("https://doxalabs.co.uk/mail-fail");
        }
      }
    }
    xhr.ontimeout = function () {
      alert('Please try again.')
    }
    xhr.open('get', url, true)
    xhr.send();
  }