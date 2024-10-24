const BACKEND_URL = 'http://backend:5000';

async function fetchTasks() {
    const response = await fetch(`${BACKEND_URL}/tasks`);
    const data = await response.json();
    const tasks = data.tasks;
    const tasksDiv = document.getElementById('tasks');
    tasksDiv.innerHTML = '';
    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `<input type="checkbox"> <span>${task}</span>`;
        tasksDiv.appendChild(taskDiv);
    });
}

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;
    taskInput.value = '';

    fetch(`${BACKEND_URL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: taskText })
    }).then(fetchTasks);
}

document.addEventListener('DOMContentLoaded', fetchTasks);

