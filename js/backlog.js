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
            backlogsContainer.innerHTML += generateBacklog(task, userId)
        });
    });
}


function generateBacklog(task, users) {
    return `
        <div class="backlog ${task.urgency}">
            <div class="backlogprofil" id="backlogProfil">
                <img id="userImage" src="${users.profil_image}" alt="Profilbild">
                <div class="backloguser">
                    <span class="backlogusername" id="backlogUser">
                        ${users.first_name}
                    </span>
                    <a id="backlogMail" class="email" href="mailto:${users.email}">${users.email}</a>
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