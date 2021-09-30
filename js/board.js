
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
    if (tasks[i]["phase"] != null) {
      addToBoard(tasks[i]["phase"], tasks[i], i);
    }
    for (let j = 0; j < tasks[i]["assignedTo"]["length"]; j++) {
      document.getElementById(`task-names${i}`).innerHTML += `<li>` + tasks[i]["assignedTo"][j]["first_name"];
    }
  }
}


/**
 * render each phase in board
 * @param {string} phase 
 * @param {object} task 
 */
function addToBoard(phase, task,i) {
  document.getElementById(phase).innerHTML += `
    <div id=${task.id} class="board-container-body__phase__card urgency-${task.urgency.toLowerCase()}" draggable="true" ondragstart="drag(event)">
      <div class="board-container-body__phase__card__top">
        <div class="board-container-body__phase__card__title">
          ${task.title}
        </div>
        <div class="board-container-body__phase__card-delete" onclick="deleteCard('${task.id}')">
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>
      <div class="board-container-body__phase__card__middle">
        <div class="board-container-body__phase__card__description">
          ${task.description.substring(0, 40)}
        </div>
      </div>
      <div class="board-container-body__phase__card__footer">
        <div class="board-container-body__phase__card__category category-${task.category.toLowerCase()}">
          <span>${task.category}</span> 
        </div>
        <div class="board-container-body__phase__card__footer__bottom">
          <div class="board-container-body__phase__card__createat">
            ${task.date}
          </div>
          <div class="board-container-body__phase__card__asingto">
            <div class="board-container-body__phase__card__asingto__name" id="task-names${i}"></div>
            <div class="board-container-body__phase__card__asingto__user">
              <img src="./img/user-2-64.png">
            </div>
          </div>
        </div>

      </div>              
    </div>
  `;
}

function deleteCard(cardId) {
  document.getElementById(cardId).remove();
  deleteTask(cardId);
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
  updateCard(data, ev.target.id);
}

function updateCard(cardId, toPhase) {
  let updatedTasks = tasks.filter( item => item.id == cardId);
  let updatedTask = updatedTasks[0];
  updatedTask.phase = toPhase;
  updateTask(updatedTask);
}