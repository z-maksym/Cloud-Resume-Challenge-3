/* form: view-source:https://jagan-sekaran.me/ */
function view_count(){
	fetch ("https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/dev/")
	.then(response => response.json())
	.then(data => document.getElementById('load_count').innerHTML="This page has been loaded# "+data)
	.catch(err => console.log(err));

}
/* leftovers of tons of stolen code below from Cloud Resumes published by other users:
view-source:https://muhannad.io/ |  https://muhannad.io/script.js
view-source:https://hey.matthasacloudresume.com/  | https://hey.matthasacloudresume.com/update_count.js
view-source:https://www.dsresume.com/ | https://www.dsresume.com/apifetch_dsresume.js
https://github.com/anebz/cv-website/blob/main/static/script.js
https://github.com/tolerl1/cloud-resume-challenge/blob/master/front-end/html/resume.html
https://github.com/JAG-010/aws-crc-frontend/blob/main/js/visitor_count.js
https://www.marcbacchi.dev/

in file script to try:
<body>
  <script>
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://6vehc79vv4.execute-api.us-east-1.amazonaws.com/Prod/counter', true);

    xhr.onload = function () {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          document.getElementById("counter").innerHTML = '&nbsp;&nbsp;' + xhr.responseText + ' views&nbsp;&nbsp;';

        }
      }
    };

    xhr.send(null);
  </script>


https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
*/

/* const eleId = "count"

let count;

fetch('https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/dev/')
  .then(res => res.json())
  .then(data => count = data)
  .then(() => console.log(count))
  .then(document.getElementById(eleId).innerHTML = count)
---
function loadContent () {
  // (A) FETCH "DUMMY.HTML"
  fetch("https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/dev/")
 
  // (B) RETURN THE RESULT AS TEXT
  .then((result) => {
    if (result.status != 200) { throw new Error("Bad Server Response"); }
    return result.text();
  })
 
  // (C) PUT LOADED CONTENT INTO <DIV>
  .then((content) => {
    document.getElementById("count").innerHTML = content;
  })
 
  // (D) HANDLE ERRORS - OPTIONAL
  .catch((error) => { console.log(error); });
}

*/
  /*
const countEl = document.getElementById('vs');

updateVisitCount();
//Testinglllll
function updateVisitCount() {
    fetch('https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/dev')
        .then(response => {
        return response.json()
      })
        .then(data => {
            console.log(data)
            document.getElementById('visits').innerHTML = data;
        })
    }.
    .catch(function(error) {
      console.log(error);
    });

    */
/*
function reqListener () {
  var obj = JSON.parse(this.responseText)
  var listItem = document.querySelector('.counter')
  var newItem = document.createElement('div')
  newItem.innerText = 'You are visitor number: ' + obj.Item.count_total
  listItem.parentNode.replaceChild(newItem, listItem)
  return obj
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/dev");
oReq.send()

----

let counterContainer = document.querySelector(".website-counter");
let resetButton = document.querySelector("#reset");
let visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});

// API invoke URL: https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/dev
var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.title)
    })
  } else {
    console.log('error')
  }
}

request.send()
*/