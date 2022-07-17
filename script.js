const makeListBtn = document.querySelector('#makeListBtn');
const container = document.querySelector('.container');

const promptDiv = document.querySelector('.prompt');

const listNameInput = document.querySelector('#listName');
const dueDateInput = document.querySelector('#dueDate');
const expandListBtn = document.querySelector('#addListInput');
const generateListBtn = document.querySelector('#generateListBtn');

makeListBtn.onclick = () => listPrompt();

function listPrompt() {
  const list = [];
  promptDiv.classList.remove('hide');
  listNameInput.value = '';
  dueDateInput.value = '';

  generateListBtn.onclick = () =>
    generateList(listNameInput.value, list, dueDateInput.value);
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
  container.appendChild(listContainer);

  listName.innerHTML = name;
}
