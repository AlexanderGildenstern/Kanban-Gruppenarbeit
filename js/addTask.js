//tasks = [];
currentUser = [];

// async function initAddTask() {
//     await downloadFromServer(); // for backend
//     tasks = JSON.parse(backend.getItem('tasks')) || []; // for backend

//     loadTasksFromServer();
//     includeHTML();
// }

function collectTask() {
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
    addTask(task);
    clearFields(title, category, description, date, urgency);
}

async function saveOnServer(task) {
    tasks = await getTasks();
    tasks.push(task);
    await backend.setItem('tasks', JSON.stringify(tasks));
}

async function getTasks() {
    await downloadFromServer();
    return JSON.parse(backend.getItem('tasks')) || [];
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

// function loadTasksFromServer() {
//     let tasksAsString = backend.getItem('tasks');
//     tasks = JSON.parse(tasksAsString) || [];
//     console.log(tasksAsString);
// }

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
