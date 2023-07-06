const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    loginMessage.textContent = 'Login functionality is not implemented yet.';
});
const registrationForm = document.getElementById('registrationForm');
const registrationMessage = document.getElementById('registrationMessage');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    registrationMessage.textContent = 'Registration functionality is not implemented yet.';
});


const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const forgotPasswordMessage = document.getElementById('forgotPasswordMessage');

forgotPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    forgotPasswordMessage.textContent = 'Forgot password functionality is not implemented yet.';
});
