const addTaskTrigger = document.getElementsByClassName('addTask_trigger')[0];
const addTaskTarget = document.getElementsByClassName('addTask_target')[0];
const addTaskValue = document.getElementsByClassName('addTask_value')[0];


const event = () => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = '';
};

const removeTask = removeButton => {
  const targetTask = removeButton.closest('li');
  addTaskTarget.removeChild(targetTask);
};

const addTask = task => {
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Delete';
  removeButton.addEventListener('click', () => removeTask(removeButton));
  listItem.innerText = task;
  listItem.append(removeButton);
  addTaskTarget.appendChild(listItem);
};


addTaskTrigger.addEventListener('click', event);