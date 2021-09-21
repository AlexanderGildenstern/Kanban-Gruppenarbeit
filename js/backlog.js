function updateBacklog() {
    for (let i = 0; i < allTasks.length; i++) {
        document.getElementById('generatedBacklog').innerHTML += generateBacklog(i);

        document.getElementById(`backlogUser${i}`).innerHTML = allTasks[i]
        document.getElementById(`backlogMail${i}`).innerHTML = allTasks[i]
        document.getElementById(`backlogCategory${i}`).innerHTML = allTasks[i]['category']
        document.getElementById(`backlogDescription${i}`).innerHTML = allTasks[i]['description']
        
    }
}

/**
 * This function generate a new backlog
 * @param {number} i - This parameter is the number of the task
 * @returns the HTML text to generate a new backlog
 */
function generateBacklog(i) {
    return `
        <div class="backlog" id="urgencyColor${i}">
            <div class="backlogprofil">
                <img src="img/user-2-64.png" alt="Profilbild">
                <div class="backloguser">
                    <span class="backlogusername" id="backlogUser${i}">
                        Hans Peters
                    </span>
                    <a class="email" href="mailto:user email" id="backlogMail${i}">hans77@join.de</a>
                </div>
            </div>
            <span class="backlogcategory" id="backlogCategory${i}">Design</span>
            <span class="backlogdetails" id="backlogDescription${i}">asdas</span>
        </div>
    `;
}

/**
 * This function choose the color for the backlog
 * @param {number} i - This is the number of the taskt
 * @returns the color which is give to the urgency 
 */
function chooseColor(i) {
    if (allTasks[i]['urgency'] == 'LOW') {
        color = 'green';
    } else if (allTasks[i]['urgency'] == 'MIDDLE') {
        color = 'yellow';
    } else if (allTasks[i]['urgency'] == 'HIGH') {
        color = 'red';
    }
    return color;
}