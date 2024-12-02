// Función para mostrar el formulario de inicio de sesión
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('help').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    document.getElementById('edit-profile').style.display = 'none';
}

// Función para mostrar el formulario de registro
function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('help').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    document.getElementById('edit-profile').style.display = 'none';
}

// Función para mostrar la sección de ayuda
function showHelp() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('help').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    document.getElementById('edit-profile').style.display = 'none';
}

// Función para mostrar la sección de contacto
function showContact() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
    document.getElementById('help').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    document.getElementById('edit-profile').style.display = 'none';
}

// Función para volver al inicio de sesión desde ayuda o contacto
function backToLogin() {
    showLogin();
}

// Función para iniciar sesión (simulada)
function login() {
    // Aquí puedes agregar tu lógica de inicio de sesión
    showProfile();  // Por ahora, muestra el perfil directamente
}

// Función para mostrar el perfil
function showProfile() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('edit-profile').style.display = 'none';
    document.getElementById('help').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
}

// Función para editar el perfil
function editProfile() {
    document.getElementById('edit-profile').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}

// Función para guardar los cambios del perfil
function saveProfile() {
    const name = document.getElementById('edit-name').value;
    const bloodType = document.getElementById('edit-blood-type').value;
    const phone = document.getElementById('edit-phone').value;
    const diseases = document.getElementById('edit-diseases').value;
    const provider = document.getElementById('edit-provider').value;

    // Mostrar la información actualizada en el perfil
    document.getElementById('profile-name').innerText = name;
    document.getElementById('profile-blood-type').innerText = bloodType;
    document.getElementById('profile-phone').innerText = phone;
    document.getElementById('profile-diseases').innerText = diseases;
    document.getElementById('profile-provider').innerText = provider;

    // Regresar al perfil para mostrar los cambios
    showProfile();
}

// Función para mostrar y ocultar la contraseña
function togglePassword() {
    const passwordField = document.getElementById('password');
    const checkbox = document.getElementById('show-password');

    if (checkbox.checked) {
        passwordField.type = 'text';  // Mostrar contraseña
    } else {
        passwordField.type = 'password';  // Ocultar contraseña
    }
}

// Función para registrarse (simulada)
function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Lógica de registro (por ejemplo, guardado en base de datos)
    alert('Registro exitoso');
    showLogin(); // Volver al login tras registro exitoso
}