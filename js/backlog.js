

/**
 * This function update the backlog
 */
function updateBacklog() {
    // document.getElementById('generatedBacklog').innerHTML = ' ';
    for (let i = 0; i < tasks.length; i++) {
        document.getElementById('generatedBacklog').innerHTML += generateBacklog(i);

        document.getElementById(`userImage${i}`).src = users[i]['profil_image'];
        document.getElementById(`backlogUser${i}`).innerHTML = users[i]['first_name'] + ' ' + users[i]['last_name'];
        document.getElementById(`backlogMail${i}`).innerHTML = users[i]['email'];
        document.getElementById(`backlogCategory${i}`).innerHTML = tasks[i]['category'];
        document.getElementById(`backlogDate${i}`).innerHTML = tasks[i]['date'];
        document.getElementById(`backlogTitle${i}`).innerHTML = tasks[i]['title'];
        
    }
}

/**
 * This function generate a new backlog
 * @param {number} i - This parameter is the number of the task
 * @returns the HTML text to generate a new backlog
 */
function generateBacklog(i) {
    return `
        <div class="backlog ${tasks[i]['urgency']}">
            <div class="backlogprofil">
                <img id="userImage${i}" src="img/user-2-64.png" alt="Profilbild">
                <div class="backloguser">
                    <span class="backlogusername" id="backlogUser${i}">
                        Hans Peters
                    </span>
                    <a class="email" href="mailto:user email" id="backlogMail${i}">hans77@join.de</a>
                </div>
            </div>
            <span class="backlogcategory" id="backlogCategory${i}">Design</span>
            <span class="backlogCreateAt" id="backlogDate${i}">21.09.2021</span>
            <span class="backlogdetails" id="backlogTitle${i}">asdas</span>
        </div>
    `;
}