// to coonect ui and models

document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const usernameByInput = document.getElementById('username').value;	
        const result = userManager.signInUser(usernameByInput);

        // check user
        if (result.success) {
            localStorage.setItem('usernameLoggedIn', usernameByInput);
            window.location.href = '../tasks.html';
        } else {
            alert('Username tidak ditemukan');
            console.log("Data tidak ditemukan");
        }
    })
})
