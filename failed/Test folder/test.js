  function visits(){
    fetch ("https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/dev/")
    .then(response => response.json())
    .then(data => document.getElementById('Visitor_Count').innerHTML="You are visitor# "+data)
    .catch(err => console.log(err));
  
  }

/*
function reqListener () {
  let obj = JSON.parse(this.responseText)
  let listItem = document.querySelector('.counter')
  let newItem = document.createElement('div')
  newItem.innerText = 'People who have seen my resume:  ' + obj.Item.count_total
  listItem.parentNode.replaceChild(newItem, listItem)
  return obj
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/dev/");
oReq.send()
*/

/* let count;

fetch('https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/dev/')
  .then(res => res.json())
  .then(data => count = data)
  .then(() => console.log(count))
  .then(document.getElementById(count).innerHTML = count)

  /*

  

let count;

updateVisitCount();
//Testinglllll
function updateVisitCount() {
    fetch('https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/dev/')
        .then(response => {
        return response.json()
      })
        .then(data => {
            console.log(data)
            document.getElementById('count').innerHTML = data;
        })
    }
/* 
let response = await fetch('https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/dev');

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
}
*/

/*
function reqListener () {
  var obj = JSON.parse(this.responseText)
  var listItem = document.querySelector('.counter')
  var newItem = document.createElement('div')
  newItem.innerText = 'People who have seen my resume:  ' + obj.Item.count_total
  listItem.parentNode.replaceChild(newItem, listItem)
  return obj
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/");
oReq.send()
*/

/*
import axios from axios
const response = await axios('https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/');
console.log(response.data);
*/

/*
const url = 'https://veuhd4jd49.execute-api.eu-central-1.amazonaws.com/'
updateLoadCount();
//Testinglllll
function updateLoadCount() {
    fetch('url')
        .then(response => {
        return response.json()
      })
        .then(data => {
          console.log(error);
            console.log(data)
            document.getElementById('visits').innerHTML = data;
        })
        .catch(function(error) {
        });
      }
    */