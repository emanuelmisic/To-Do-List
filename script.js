const makeListBtn = document.querySelector('#makeListBtn');

const promptDiv = document.querySelector('.prompt');

const listNameInput = document.querySelector('#listName');
const dueDateOutput = document.querySelector('#dueDate');
const expandListBtn = document.querySelector('#addListInput');
const generateListBtn = document.querySelector('#generateListBtn');

makeListBtn.onclick = () => listPrompt();
generateListBtn.onclick = () => generateList();

function listPrompt() {
  promptDiv.classList.remove('hide');
}

function generateList() {}
