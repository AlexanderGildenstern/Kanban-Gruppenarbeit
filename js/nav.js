/**
 * 
 * @param {string} option
 */
function loadNavbarStyle(option) {
  includeHTML();
  window.setTimeout(() => { activateOption(option) }, 100);
}

/**
 * clear active sytle and set the clicked option active 
 * @param {string} option 
 */
function activateOption(option) {
  if (localStorage.getItem("profil_image")) {
    document.getElementById("profile-image").src = localStorage.getItem("profil_image");
  } else {
    document.getElementById("profile-image").src = "./img/user-2-64.png";
  }

  switch (option) {
    case "board":
      document.getElementById("opt-board").classList.add("option-active");
      document.getElementById("opt-backlog").classList.remove("option-active");
      document.getElementById("opt-addtask").classList.remove("option-active");
      document.getElementById("opt-help").classList.remove("option-active");
      document.getElementById("opt-imprint").classList.remove("option-active");
      document.getElementById("opt-policy").classList.remove("option-active");
      break;
    case "backlog":
      document.getElementById("opt-board").classList.remove("option-active");
      document.getElementById("opt-backlog").classList.add("option-active");
      document.getElementById("opt-addtask").classList.remove("option-active");
      document.getElementById("opt-help").classList.remove("option-active");
      document.getElementById("opt-imprint").classList.remove("option-active");
      document.getElementById("opt-policy").classList.remove("option-active");
      break;
    case "addtask":
      document.getElementById("opt-board").classList.remove("option-active");
      document.getElementById("opt-backlog").classList.remove("option-active");
      document.getElementById("opt-addtask").classList.add("option-active");
      document.getElementById("opt-help").classList.remove("option-active");
      document.getElementById("opt-imprint").classList.remove("option-active");
      document.getElementById("opt-policy").classList.remove("option-active");
      break;
    case "help":
      document.getElementById("opt-board").classList.remove("option-active");
      document.getElementById("opt-backlog").classList.remove("option-active");
      document.getElementById("opt-addtask").classList.remove("option-active");
      document.getElementById("opt-help").classList.add("option-active");
      document.getElementById("opt-imprint").classList.remove("option-active");
      document.getElementById("opt-policy").classList.remove("option-active");
      break;
    case "imprint":
      document.getElementById("opt-board").classList.remove("option-active");
      document.getElementById("opt-backlog").classList.remove("option-active");
      document.getElementById("opt-addtask").classList.remove("option-active");
      document.getElementById("opt-help").classList.remove("option-active");
      document.getElementById("opt-imprint").classList.add("option-active");
      document.getElementById("opt-policy").classList.remove("option-active");
      break;
    case "policy":
      document.getElementById("opt-board").classList.remove("option-active");
      document.getElementById("opt-backlog").classList.remove("option-active");
      document.getElementById("opt-addtask").classList.remove("option-active");
      document.getElementById("opt-help").classList.remove("option-active");
      document.getElementById("opt-imprint").classList.remove("option-active");
      document.getElementById("opt-policy").classList.add("option-active");
      break;
  }
}


function toggleNavbar() {
  var menu = document.getElementById("navbar-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}