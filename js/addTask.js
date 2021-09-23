allTasks = [];
currentUser = [];

async function initAddTask() {
    await downloadFromServer(); // for backend
    allTasks = JSON.parse(backend.getItem('allTasks')) || []; // for backend

    loadAllTasksFromServer();
    includeHTML();
}

function fetchTask() {
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let urgency = document.getElementById('urgency');
    let assignedTo = this.currentUser;

    let task = {
        'title': title.value,
        'category': category.value,
        'description': description.value,
        'date': date.value,
        'createAt': new Date().getTime(),
        'urgency': urgency.value,
        'assignedTo': assignedTo,
    }
    saveOnServer(task);
    clearFields(title, category, description, date, urgency);
}

async function saveOnServer(task) {
    allTasks = await getAllTasks();
    allTasks.push(task);
    await backend.setItem('allTasks', JSON.stringify(allTasks));
}

async function getAllTasks() {
    await downloadFromServer();
    return JSON.parse(backend.getItem('allTasks')) || [];
}

/**
 * Reset all fields in addTask
 * 
 * @param {text} title 
 * @param {text} category 
 * @param {text} description 
 * @param {number} date 
 * @param {text} urgency 
 */
function clearFields(title, category, description, date, urgency) {
    title.value = '';
    category.selectedIndex = 0;
    description.value = '';
    date.value = '';
    urgency.selectedIndex = 0;
}

function loadAllTasksFromServer() {
    let allTasksAsString = backend.getItem('allTasks');
    allTasks = JSON.parse(allTasksAsString) || [];
    console.log(allTasksAsString);
}

function activeBorder(user) {
    let currentUser = document.getElementById(user);

    if (currentUser.className.indexOf('user-active') === -1) {
        currentUser.classList.add('user-active');
        this.currentUser.push(user);
    }
    else {
        currentUser.classList.remove('user-active');
        this.currentUser.splice(user,1);
    }
}
