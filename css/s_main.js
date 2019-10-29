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

function submit(di1) {
  if (
    document.getElementById("ra1").checked ||
    document.getElementById("rb1").checked ||
    document.getElementById("rc1").checked ||
    document.getElementById("rd1").checked
  ) {
    document.getElementById("submit").textContent = "Submitted";
    document.getElementById("submit").style.background = "#1c7c54";
    document.getElementById("submit").style.cursor = "context-menu";

    document.getElementById("questionno1").style.background = "white";
    document.getElementById("tick1").style.display = "inline-block";
    document.getElementById("div1").className = "ques1";
    document.getElementById("circle1").style.background = "#1c7c54";
  }
}

function review() {
  if (document.getElementById("tick1").style.display == "none") {
    document.getElementById("questionno1").style.background = "#D32E3F";

    document.getElementById("circle1").style.background = "#D32E3F";

    document.getElementById("div1").className = "ques1";
  } else {
    alert("Answer already submited");
    document.getElementById("div1").className = "ques1";
  }
}
