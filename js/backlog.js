async function initBacklog() {
    await init();
    updateBacklog();
}

/**
 * This function update the backlog
 */
function updateBacklog() {
    document.getElementById('generatedBacklog').innerHTML = ' ';
    for (let i = 0; i < tasks.length; i++) {
        document.getElementById('generatedBacklog').innerHTML += generateBacklog(i);

        if (tasks[i]["assignedTo"] == false || tasks[i]["assignedTo"]["length"] > 1) {
            document.getElementById(`userImage${i}`).src = "img/user-2-64.png"; // unknow user pic
            document.getElementById(`backlogMail${i}`).innerHTML = '';
        } else {
            document.getElementById(`backlogMail${i}`).innerHTML = tasks[i]["assignedTo"][0]["email"];
            document.getElementById(`userImage${i}`).src = tasks[i]["assignedTo"][0]["profil_image"];
        }
        for (let j = 0; j < tasks[i]["assignedTo"]["length"]; j++) {
            document.getElementById(`backlogUser${i}`).innerHTML += tasks[i]["assignedTo"][j]["first_name"] //+ `<br>`
        }
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
            <div class="backlogprofil" id="backlogProfil">
                <img id="userImage${i}" src="img/user-2-64.png" alt="Profilbild">
                <div class="backloguser">
                    <span class="backlogusername" id="backlogUser${i}">
                        
                    </span>
                    <a id="backlogMail${i}" class="email" href="mailto:user email"></a>
                </div>
            </div>
            <span class="backlogcategory" id="backlogCategory${i}">Design</span>
            <span class="backlogCreateAt" id="backlogDate${i}">21.09.2021</span>
            <span class="backlogdetails" id="backlogTitle${i}">asdas</span>
        </div>
    `;
}