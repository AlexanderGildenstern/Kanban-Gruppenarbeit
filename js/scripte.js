let users = [{
  "last_name": "Gildenstern",
  "first_name": "Alexander",
  "email": "A.Gildenstern@gmx.de",
  "profil_image": "./img/pic2.jpg"
},

{
  "last_name": "Xia",
  "first_name": "Bing",
  "email": "xia.bing@live.com",
  "profil_image": "./img/pic5.jpg"
},

{
  "last_name": "Zeiler",
  "first_name": "Niklas",
  "email": "zeiler.niklas@yahoo.de",
  "profil_image": "./img/user_niklas.jpg"
}];
let tasks = [];

const category = {
  MANAGEMENT: 'Management',
  IT: 'IT',
  CONTROLING: 'Controling',
  FINANCE: 'Finance',
  WEB: 'Web'
};

const urgency = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low'
};

const phase = {
  TODO: 'todo',
  INPROGRESS: 'inprogress',
  TESTING: 'testing',
  DONE: 'done'
};

async function init() {
  await downloadFromServer(); // for backend
  tasks = JSON.parse(backend.getItem('tasks')) || []; // for backend
  loadTasksFromServer();
  includeHTML();
  updateBacklog();
}
/**
 * smallest_backend_ever, URL-link
 * 
 */
setURL('http://gruppe-100.developerakademie.com/Kanban-Gruppenarbeit/smallest_backend_ever');

/**
 * for include templates
 * 
 * @returns 
 */
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

/**
 * save tasks array on server
 * @param {object} newTask 
 */
async function addTask(newTask) {
  tasks = await getTasks();
  tasks.push(newTask);
  await backend.setItem('tasks', JSON.stringify(tasks));
}

/**
* get tasks array from server
*  
*/
async function getTasks() {
  await downloadFromServer();
  return JSON.parse(backend.getItem('tasks')) || [];
}

/**
* update a task from taskes array on server
* @param {string} taskId
*/
async function updateTask(updatedTask) {
  let newTasks = [];
  if (tasks == '') {
    tasks = await getTasks();
  }
  clearTasks();
  newTasks = tasks.filter(item => item.id !== updatedTask.id);
  newTasks.push(updatedTask);
  await backend.setItem('tasks', JSON.stringify(newTasks));
}

/**
* delete a specific task according to taskId
* @param {string} taskId
*/
async function deleteTask(taskId) {
  let newTasks = [];
  if (tasks == '') {
    tasks = await getTasks();
  }
  clearTasks();
  newTasks = tasks.filter(item => item.id !== taskId);
  await backend.setItem('tasks', JSON.stringify(newTasks));
}

/**
* clear all tasks from taskes array on server
* 
*/
function clearTasks() {
  backend.deleteItem('tasks');
}


// /**
//  * save array on server
//  *
//  */
// async function addUser() {
//     users.push('John');
//     await backend.setItem('users', JSON.stringify(users));
// }
// /**
//  * delete array on server
//  *
//  * @param {array} name
//  */
// function deleteUser(name) {
//     backend.deleteItem('users');
//   }