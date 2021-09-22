
/**
 * load task array from backend and distribute into each phase
 */
async function loadTasks() {
  tasks = await getTasks();
  document.getElementById("todo").innerHTML = "";
  document.getElementById("inprogress").innerHTML = "";
  document.getElementById("testing").innerHTML = "";
  document.getElementById("done").innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
      addToBoard(tasks[i]["phase"], tasks[i]);
  }
}

/**
 * render each phase in board
 * @param {string} phase 
 * @param {object} task 
 */
function addToBoard(phase, task) {
  document.getElementById(phase).innerHTML += `
    <div id=${task.id} class="board-container-body__phase__card" draggable="true" ondragstart="drag(event)">
      <div class="board-container-body__phase__card__description">
        ${task.description}
      </div>
      <div class="board-container-body__phase__card__footer">
        <div class="board-container-body__phase__card__category category-${task.category.toLowerCase()}">
          <span>${task.category}</span> 
        </div>
        <div class="board-container-body__phase__card__asingto">
          <div class="board-container-body__phase__card__asingto__name">${task.assignTo}</div>
          <div class="board-container-body__phase__card__asingto__user">
            <img src="./img/user-2-64.png">
          </div>
        </div>
      </div>              
    </div>
  `;
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  if(ev.target.className == "board-container-body__phase")
    {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }
}