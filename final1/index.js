const VALID_EMAIL = "admin@masai.com";
const VALID_PASSWORD = "masai123";
const loginForm = document.getElementById("login-form");
const loginMsg = document.getElementById("login-Msg");

loginForm.addEventListener("submit",function(e){
    e.preventDefault();
    const email =document.getElementById("email").Value.trim();
     const password =document.getElementById("password ").Value.trim();
     if(email === VALID_EMAIL && 
        password ===VALID_PASSWORD){
            loginMsg.textContent ="login successful";
            window.location.href="admin.html";
        } else{
            alert("Wrong email or password");
            loginMsg.textContent ="login failed";
        }
      
});