const makeListBtn = document.querySelector('#makeListBtn');
const container = document.querySelector('.container');

const promptDiv = document.querySelector('.prompt');

const listNameInput = document.querySelector('#listName');
const dueDateInput = document.querySelector('#dueDate');
const expandListBtn = document.querySelector('#addListInput');
const generateListBtn = document.querySelector('#generateListBtn');

makeListBtn.onclick = () => listPrompt();

function listPrompt() {
  let id = 2;
  const list = [];
  promptDiv.classList.remove('hide');
  listNameInput.value = '';
  dueDateInput.value = '';

  expandListBtn.onclick = () => {
    addItem(id);
    id++;
  };
  generateListBtn.onclick = () => {
    for (let i = 1; i < id; i++) {
      const item = document.querySelector(`#listItem${i}`);
      list.push(`${item.value}`);
    }
    generateList(listNameInput.value, list, dueDateInput.value);
  };
}

function generateList(name, list, dueDate) {
  let listName = name;
  let itemList = list;
  let date = dueDate;
  promptDiv.classList.add('hide');
  displayList(listName, itemList, date);
}

function displayList(name, list, dueDate) {
  const listContainer = document.createElement('div');
  listContainer.classList.add('list');
  const listName = document.createElement('h3');
  listName.classList.add('listName');
  listContainer.appendChild(listName);
  for (let i = 1; i <= list.length; i++) {
    const item = document.createElement('p');
    item.classList.add('item');
    if (i % 2 == 0) {
      item.classList.add('even');
    } else {
      item.classList.add('odd');
    }
    listContainer.appendChild(item);
    item.innerHTML = list[i - 1];
  }
  const dueDateDisplay = document.createElement('p');
  dueDateDisplay.classList.add('dueDate');

  listContainer.appendChild(dueDateDisplay);
  container.appendChild(listContainer);

  listName.innerHTML = name;
  dueDateDisplay.innerHTML = dueDate;
}

function addItem(id) {
  const itemInput = document.createElement('input');
  itemInput.type = 'text';
  itemInput.id = `listItem${id}`;
  promptDiv.appendChild(itemInput);
  promptDiv.appendChild(expandListBtn);
  promptDiv.appendChild(generateListBtn);
}
