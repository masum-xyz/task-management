// bussiness logic for user

class User {

    constructor() {
        this.users = this.getUsers() || [];
    }

    saveUser(userData) {
        const newUser = {
            id: Date.now(),
            ...userData,
        }

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        // return window.location.href = '../signin.html';

        return {
            succes: true,
        }
    }

    signInUser(usernameByInput) {
        // cek user
        const userExists = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());
        if (userExists) {
            return {
                success: true,
                username: usernameByInput,
            }
        } else {
            return {
                success: false,
                message: 'Data tidak ditemukan',
            }
        }
        

        return {
            success: true,
            username,
        }
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }
}