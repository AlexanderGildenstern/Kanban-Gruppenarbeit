async function initBacklog() {
    await init();
    updateBacklog();
}

/**
 * This function update the backlog
 */
function updateBacklog() {
    let backlogsContainer = document.getElementById("generatedBacklog");
    backlogsContainer.innerHTML = "";
    tasks.forEach(task => {
        task.assignedTo.forEach(userId => {
            let user = users.find(user => user.id === userId)
            backlogsContainer.innerHTML += generateBacklog(task, user)
        });
    });
}

/**
 * This function generate a new backlog
 * @param {number} i - This parameter is the number of the task
 * @returns the HTML text to generate a new backlog
 */
function generateBacklog(task, user) {
    return `
        <div class="backlog ${tasks.urgency}">
            <div class="backlogprofil" id="backlogProfil">
                <img id="userImage" src="${user.profil_image}" alt="Profilbild">
                <div class="backloguser">
                    <span class="backlogusername" id="backlogUser">
                        ${user.first_name}
                    </span>
                    <a id="backlogMail" class="email" href="mailto:${user.email}">${user.email}</a>
                </div>
            </div>
            <div class="backlogcategory">
                <span id="backlogCategory">${task.category}</span>
            </div>
            <div class="backlogCreateAt">
                <span id="backlogDate">${task.date}</span>
            </div>
            <div class="backlogdetails">
                <span id="backlogTitle">${task.title}</span>
            </div>
        </div>
    `;
}