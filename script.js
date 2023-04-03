const counter = document.getElementById("counter");
const increment = async () => {
  const response = await fetch(
    "https://api.countapi.xyz/update/despage/d6ed24c0-7f19-468f-baed-319df1798d57/?amount=1"
  );
  const data = await response.json();
  console.log(data.value);
  document.getElementById("counter").innerHTML = data.value;
};
increment();

//get the current date and time at the time of visit
let now = new Date();
let last = new Date();
let cookieText =
  "username=" +
  ";path=/;expires=" +
  now.setMonth(now.getMonth() + 2).toLocaleString() +
  ";lastVisit=" +
  last.toDateString() +
  " " +
  last.toLocaleTimeString();

document.cookie = cookieText;
let lastVisit = cookieText.split("=");
//show the previous visit date and time
document.getElementById("lastVisit").innerHTML =
  localStorage.getItem("lastVisit");
// set the time load the page at current sesssion
localStorage.setItem("lastVisit", lastVisit[4].toString());
