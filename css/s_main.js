/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "265px";

  document.getElementById("main").style.opacity = "0.5";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

  document.getElementById("main").style.opacity = "1";
}

function myfunc(div1) {
  var className = div1.getAttribute("class");
  if (className == "ques1") {
    div1.className = "ques2";
  } else {
    div1.className = "ques1";
  }
}
function myfunc(div2) {
  var className = div2.getAttribute("class");
  if (className == "ques1") {
    div2.className = "ques2";
  } else {
    div2.className = "ques1";
  }
}

function submit(div1) {
  document.getElementById("submit").textContent = "Submitted";
  document.getElementById("submit").style.background = "#1c7c54";
  document.getElementById("ans1").style.display = "none";
}
