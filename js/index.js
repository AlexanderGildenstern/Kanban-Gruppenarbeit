loginUser = {};

async function initLogin() {
  await init();
  await saveUser();
  checkProfilImage();
}



/**
 * authenticate user
 */
async function authenticateUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  loginUser = users.find(user => user.email === email);
  if (loginUser && loginUser.password == password) {
    storeSession(loginUser.profil_image);
    await saveUser();
    window.open('/addTask.html','_self');
  } else {
    alert("Email or password is incorrect");
  }
}


function registerwithMail() {
  document.getElementById('registerMain').classList.remove('d-none');
  document.getElementById('loginMain').classList.add('d-none');
}


function backToLogin() {
  document.getElementById('registerMain').classList.add('d-none');
  document.getElementById('loginMain').classList.remove('d-none');
}

/**
 * Check if values in the variable
 * @returns true or false 
 */
function checkvalidForm() {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let password = document.getElementById('password-field').value;
  let email = document.getElementById('registerEmail').value;

  return firstName.length > 0 &&
<<<<<<< HEAD
         lastName.length > 0 &&
         password.length > 0 &&
         email.length > 0;
}

/**
 * Create a new object 
 * @returns an object with values 
 */
function createNewUser() {
  return {
    first_name: document.getElementById('firstName').value,
    last_name: document.getElementById('lastName').value,
    password: document.getElementById('password-field').value,
    email: document.getElementById('registerEmail').value,
    id: new Date().getTime()
  }
}

/**
 * Register a new user or issues a alert to fill in the fields
 */
function register() {
  if (checkvalidForm()) {
    users.push(createNewUser());
    window.open('./addTask.html','_self');    
=======
    lastName.length > 0 &&
    password.length > 0 &&
    email.length > 0;
}

/**
 * Create a new object 
 * @returns an object with values 
 */
function createNewUser() {
  return {
    last_name: document.getElementById('lastName').value,
    first_name: document.getElementById('firstName').value,
    email: document.getElementById('registerEmail').value,
    password: document.getElementById('password-field').value,
    profil_image: "./img/user-2-64.png",
    id: new Date().getTime()
  }
}

/**
 * Register a new user or issues a alert to fill in the fields
 */
async function register() {
  if (checkvalidForm()) {
    users.push(createNewUser());
    await saveUser();
    window.open('./addTask.html', '_self');
>>>>>>> 12d29c26cb066c8db20a0b4e9557b4cd4c6693bc
  } else {
    alert('Please fill out the input fields!');
  }
}


function showPassword() {
  let x = document.getElementById('password-field');
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

<<<<<<< HEAD

=======
>>>>>>> 12d29c26cb066c8db20a0b4e9557b4cd4c6693bc
// /**
//  * store user information in local
//  * @param {string} email 
//  */
function storeSession(imagePath) {
  localStorage.setItem("profil_image", imagePath);
}


function checkProfilImage() {
  if (localStorage.getItem("profil_image") != "") {
    localStorage.setItem("profil_image", "");
  }
}

