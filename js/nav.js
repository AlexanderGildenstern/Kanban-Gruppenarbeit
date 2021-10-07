const optionIds = ["opt-board", 
                  "opt-backlog", 
                  "opt-addtask", 
                  "opt-help", 
                  "opt-imprint",
                  "opt-policy"];

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

  for (let i = 0; i < optionIds.length; i++) {
    if (option == optionIds[i].substring(4)) {
      console.log(option);
      document.getElementById(optionIds[i]).classList.add("option-active");
    } else {
      document.getElementById(optionIds[i]).classList.remove("option-active");
    }

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