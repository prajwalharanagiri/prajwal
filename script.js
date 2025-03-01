document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        
        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        
        // Add delete functionality
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        // Clear input field
        taskInput.value = "";
    }
});
