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
        task.assignedTo.forEach(user => {
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
        <div class="backlog ${task.urgency}">
            <div class="backlogprofil" id="backlogProfil">
                <img id="profilImage" src="${user.profil_image}" alt="Profilbild">
                <div class="backloguser">
                    <span class="backlogusername" id="UserNameBacklog">
                    ${user.first_name}
                    </span>
                    <a id="email" class="email" href="mailto:${user.email}">${user.email}</a>
                </div>
            </div>
            <span class="backlogcategory" id="BacklogCategory">${task.category}</span>
            <span class="backlogCreateAt" id="BacklogDate">${task.date}</span>
            <span class="backlogdetails" id="BacklogTitle">${task.title}</span>
        </div>
    `;
}