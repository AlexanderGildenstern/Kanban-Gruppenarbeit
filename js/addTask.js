allTasks = [];

function fetchTask() {
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let urgency = document.getElementById('urgency');
    //let assignedTo = document.getElementById('assignedTo');

    let task = {
        'title': title.value,
        'category': category.value,
        'description': description.value,
        'date': date.value,
        'createAt': new Date().getTime(),
        'urgency': urgency.value,
        //    'assignedTo': assignedTo.value,
    }
    allTasks.push(task);
    let allTasksAsString = JSON.stringify(allTasks);
    localStorage.setItem('allTasks', allTasksAsString);

    clearFields(title, category, description, date, urgency);
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
/**
 * 
 * 
 */
function loadAllTasks() {
    let allTasksAsString = localStorage.getItem('allTasks');
    allTasks = JSON.parse(allTasksAsString);
    console.log(allTasks);
}