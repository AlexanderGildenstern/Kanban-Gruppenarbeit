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

  switch(option) {
    case "board":
      document.getElementById("opt-board").classList.add("option-active");
      document.getElementById("opt-backlog").classList.remove("option-active");
      document.getElementById("opt-addtask").classList.remove("option-active");
      document.getElementById("opt-help").classList.remove("option-active");
      break;
    case "backlog":
      document.getElementById("opt-board").classList.remove("option-active");
      document.getElementById("opt-backlog").classList.add("option-active");
      document.getElementById("opt-addtask").classList.remove("option-active");
      document.getElementById("opt-help").classList.remove("option-active");
      break;
    case "addtask":
      document.getElementById("opt-board").classList.remove("option-active");
      document.getElementById("opt-backlog").classList.remove("option-active");
      document.getElementById("opt-addtask").classList.add("option-active");
      document.getElementById("opt-help").classList.remove("option-active");
      break;
    case "help":
      document.getElementById("opt-board").classList.remove("option-active");
      document.getElementById("opt-backlog").classList.remove("option-active");
      document.getElementById("opt-addtask").classList.remove("option-active");
      document.getElementById("opt-help").classList.add("option-active");
      break;
    }
}

