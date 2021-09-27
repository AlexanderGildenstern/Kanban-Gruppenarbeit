currentUser = [];
id;

function collectTask() {
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let urgency = document.getElementById('urgency');
    let assignedTo = this.currentUser;
    this.id = Date.now().toString(36) + Math.random().toString(36).substring(2);

    let task = {
        'title': title.value,
        'category': category.value,
        'description': description.value,
        'date': date.value,
        'createAt': new Date().getTime(),
        'urgency': urgency.value,
        'assignedTo': assignedTo,
        'id': this.id,
        'phase': 'todo',
    }
    addTask(task);
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

function activeBorder(user) {
    let currentUser = document.getElementById(user);

    if (currentUser.className.indexOf('user-active') === -1) {
        currentUser.classList.add('user-active');
        this.currentUser.push(user);
    }
    else {
        currentUser.classList.remove('user-active');
        this.currentUser.splice(user, 1);
    }
}
