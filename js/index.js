/**
 * authenticate user
 */
function authenticateUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let loginUser = users.filter(user => user.email == email);
  if (loginUser[0].password != password && loginUser != "") {
    alert("Email or password is incorrect");
  } else {
    storeSession(loginUser[0].profil_image);
    document.form.action = "addTask.html";
    document.form.submit();
  }
}

/**
 * store user information in local
 * @param {string} email 
 */
function storeSession(imagePath) {
  localStorage.setItem("profil_image", imagePath);
}