class Task {
    constructor() {
        this.tasks = this.getTasks();
    }

    getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    saveTask(taskData) {
        const newTaskData = {
            id: Date.now(),
            isCompleted: false,
            ...taskData,
        };

        this.tasks.push(newTaskData);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));

        return {
            success: true,
        }
    }

    // complete task
    completeTask(taskId) {
        const index = this.tasks.findIndex(task => task.id === taskId);

        if (index !== -1) {
            this.tasks[index].isCompleted = true;
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
    // delete task
    deleteTask(taskId) {
        const index = this.tasks.findIndex(task => task.id === taskId);

        if (index !== -1) {
            this.tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
}