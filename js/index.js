async function initLogin() {
  await init();
  await saveUser();
}
//   if (localStorage.getItem("profil_image") != "") {
//     localStorage.setItem("profil_image", "");
//   }
// }


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
    window.open('./addTask.html','_self');    
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

// /**
//  * store user information in local
//  * @param {string} email 
//  */
function storeSession(imagePath) {
  localStorage.setItem("profil_image", imagePath);
}

