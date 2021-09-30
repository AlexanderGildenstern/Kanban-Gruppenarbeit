currentUser = [];
sendUser = [];
let id;
/**
 * fetch value of fields
 * 
 */
function collectTask(event) {
    event.preventDefault();
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let urgency = document.getElementById('urgency');
    let assignedTo = this.sendUser;
    id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    

    let task = {
        'title': title.value,
        'category': category.value,
        'description': description.value,
        'date': date.value,
        'createAt': new Date().getTime(),
        'urgency': urgency.value,
        'assignedTo': assignedTo,
        'id': id,
        'phase': 'todo',
    }
    addTask(task);
    clearFields(title, category, description, date, urgency);
}

/**
 * Reset all fields
 * 
 * @param {string} title 
 * @param {string} category 
 * @param {string} description 
 * @param {number} date 
 * @param {string} urgency 
 */
function clearFields(title, category, description, date, urgency) {
    title.value = '';
    category.selectedIndex = 0;
    description.value = '';
    date.value = '';
    urgency.selectedIndex = 0;
}
/**
 * activate or deactivate border an user 
 * 
 * @param {string} user 
 */
 function activeBorder(user, i) {
    let currentUser = document.getElementById(user);

    if (currentUser.className.indexOf('user-active') === -1) {
        currentUser.classList.add('user-active');
         this.currentUser.push(user);
         this.sendUser.push(users[i]); //["first_name"]
    }
    else {
        currentUser.classList.remove('user-active');
         this.currentUser.splice(user, 1);
         this.sendUser.splice(users[i],1);
    }   
}