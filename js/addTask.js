// to coonect ui and models

document.addEventListener('DOMContentLoaded', () => {

    // create date yyyy-mm-dd
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const taskForm = document.getElementById('taskForm');
    const taskManager = new Task();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskData = {
            taskName: document.getElementById('taskName').value,
            taskPriority: document.getElementById('taskPriority').value,
            createdAt: `${year}-${month}-${day}`
        }
        const result = taskManager.saveTask(taskData);

        // cek status
        if (result.success) {
            return window.location.href = 'tasks.html';
        } else {
            console.log('Error saving user');
            
        }
    })
})