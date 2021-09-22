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
      document.getElementById("opt-board").classList.add("option-avtive");
      document.getElementById("opt-backlog").classList.remove("option-avtive");
      document.getElementById("opt-addtask").classList.remove("option-avtive");
      document.getElementById("opt-help").classList.remove("option-avtive");
      break;
    case "backlog":
      document.getElementById("opt-board").classList.remove("option-avtive");
      document.getElementById("opt-backlog").classList.add("option-avtive");
      document.getElementById("opt-addtask").classList.remove("option-avtive");
      document.getElementById("opt-help").classList.remove("option-avtive");
      break;
    case "addtask":
      document.getElementById("opt-board").classList.remove("option-avtive");
      document.getElementById("opt-backlog").classList.remove("option-avtive");
      document.getElementById("opt-addtask").classList.add("option-avtive");
      document.getElementById("opt-help").classList.remove("option-avtive");
      break;
    case "help":
      document.getElementById("opt-board").classList.add("option-avtive");
      document.getElementById("opt-backlog").classList.remove("option-avtive");
      document.getElementById("opt-addtask").classList.remove("option-avtive");
      document.getElementById("opt-help").classList.add("option-avtive");
      break;
    }
}

