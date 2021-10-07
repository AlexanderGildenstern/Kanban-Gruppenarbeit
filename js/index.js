/**
 * authenticate user
 */
function authenticateUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let loginUser = users.find(user => user.email == email);
  if (loginUser && loginUser.password == password) {
    storeSession(loginUser.profil_image);
    document.form.action = "addTask.html";
    document.form.submit();
  } else {
    alert("Email or password is incorrect");
  }
}

/**
 * store user information in local
 * @param {string} email 
 */
function storeSession(imagePath) {
  localStorage.setItem("profil_image", imagePath);
}

function initLogin() {
  if (localStorage.getItem("profil_image") != "") {
    localStorage.setItem("profil_image", "");
  }
}