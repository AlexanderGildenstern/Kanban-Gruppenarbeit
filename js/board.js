//let tasks = [];

function initBoard() {
  let task1 = new Task(
    "1",
    "Title",
    category.DESIGN,
    "Description",
    "2021-10-05",
    urgency.HIGH,
    "Bing",
    phase.TODO
    );
  let task2 = new Task(
    "6",
    "Title",
    category.DESIGN,
    "Description",
    "2021-10-05",
    urgency.HIGH,
    "Bing",
    phase.TODO
    );

  addTask(task1);
}


async function loadTasks() {
  tasks = await getTasks();
  //console.log(tasks);
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].phase == phase.TODO) {
      addTODO(tasks[i]);
    }
  }
}

function addTODO(task) {
  document.getElementById('todo').innerHTML += `
    <div id=${task.id} class="board-container-body__phase__card" draggable="true" ondragstart="drag(event)">
      <div class="board-container-body__phase__card__description">
        ${task.description}
      </div>
      <div class="board-container-body__phase__card__footer">
        <div class="board-container-body__phase__card__category category-marketing">
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
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}