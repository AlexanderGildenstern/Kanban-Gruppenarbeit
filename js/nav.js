function activateOption(option) {
  switch(option) {
    case "board":
      document.getElementById("opt-board").classList.add("option-avtive");
      break;
    case "backlog":
      document.getElementById("opt-backlog").classList.add("option-avtive");
      break;
    case "addtask":
      document.getElementById("opt-addtask").classList.add("option-avtive");
      break;
    case "help":
      document.getElementById("opt-help").classList.add("option-avtive");
      break;
    }
}