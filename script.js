const makeListBtn = document.querySelector('#makeListBtn');
const container = document.querySelector('.container');
let listID = 1;

const promptDiv = document.querySelector('.prompt');

const listNameInput = document.querySelector('#listName');
const dueDateInput = document.querySelector('#dueDate');
const expandListBtn = document.querySelector('#addListInput');
const generateListBtn = document.querySelector('#generateListBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const warning = document.querySelector('#warning');

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
    let validation;
    if (listNameInput.value == '') {
      listNameInput.placeholder = 'Cannot be empty!';
    } else {
      for (let i = 1; i < id; i++) {
        const item = document.querySelector(`#listItem${i}`);
        if (item.value == '') {
          validation = false;
          warning.classList.remove('hide');
        } else {
          validation = true;
          list.push(`${item.value}`);
        }
      }
      if (validation == true) {
        warning.classList.add('hide');
        for (let i = 2; i < id; i++) {
          const item = document.querySelector(`#listItem${i}`);
          item.remove();
        }
        const item = document.querySelector('#listItem1');
        item.value = '';
        generateList(listNameInput.value, list, dueDateInput.value);
      }
    }
  };
  cancelBtn.onclick = () => {
    promptDiv.classList.add('hide');
    listNameInput.placeholder = '';
    for (let i = 2; i < id; i++) {
      const item = document.querySelector(`#listItem${i}`);
      item.remove();
    }
    const item = document.querySelector('#listItem1');
    item.value = '';
  };
}

function generateList(name, list, dueDate) {
  let listName = name;
  let itemList = list;
  let date = dueDate;
  promptDiv.classList.add('hide');
  if (container.childElementCount != 0) {
    listID = container.childElementCount + 1;
  }
  displayList(listID, listName, itemList, date);
}

function displayList(id, name, list, dueDate) {
  const listContainer = document.createElement('div');
  listContainer.classList.add('list');
  listContainer.id = `list${id}`;
  const listName = document.createElement('h3');
  listName.classList.add('listName');
  listContainer.appendChild(listName);
  for (let i = 1; i <= list.length; i++) {
    const itemDiv = document.createElement('div');
    const item = document.createElement('p');
    itemDiv.classList.add('item');
    if (i % 2 == 0) {
      itemDiv.classList.add('even');
    } else {
      itemDiv.classList.add('odd');
    }
    listContainer.appendChild(itemDiv);
    itemDiv.appendChild(item);
    item.innerHTML = `> ${list[i - 1]}`;
  }
  const dueDateDisplay = document.createElement('p');
  dueDateDisplay.classList.add('dueDate');

  listContainer.appendChild(dueDateDisplay);
  container.appendChild(listContainer);

  listName.innerHTML = name;

  dueDateDisplay.innerHTML = `${dueDate.slice(8, 10)}.${dueDate.slice(
    5,
    7
  )}.${dueDate.slice(0, 4)}.`;
}

function addItem(id) {
  const itemInput = document.createElement('input');
  itemInput.type = 'text';
  itemInput.id = `listItem${id}`;
  promptDiv.appendChild(itemInput);
  promptDiv.appendChild(expandListBtn);
  promptDiv.appendChild(generateListBtn);
  promptDiv.appendChild(cancelBtn);
  promptDiv.appendChild(warning);
}
