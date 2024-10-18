const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.classList.add('bg-white', 'shadow-lg', 'p-3', 'rounded', 'mt-2', 'flex', 'justify-between', 'items-center');

        const leftDiv = document.createElement('div');
        // leftDiv.classList.add('flex');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('mr-2');

        const span = document.createElement('span');
        span.textContent = taskText;

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                span.style.textDecoration = 'line-through';
            } else {
                span.style.textDecoration = 'none';
            }
        });

        const deleteIcon = document.createElement('span');
        deleteIcon.innerHTML = '🗑️'; // Ikon tempat sampah
        deleteIcon.classList.add('cursor-pointer', 'text-red-500');

        deleteIcon.addEventListener('click', function () {
            li.remove();
        });

        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);

        li.appendChild(leftDiv);
        li.appendChild(deleteIcon);

        taskList.appendChild(li);

        taskInput.value = '';
    }
}
