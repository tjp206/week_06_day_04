document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const createReadingListItem = function (event) {
    // // separate the input data into variables.
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

  const newReadListItem = document.createElement('li');
    newReadListItem.textContent = `${title} ${author} ${category}`;
    // newReadListItem.classList.add('');
    const list = document.querySelector('ul');
    list.appendChild(newReadListItem);
}

// handle form submit for form const below.#new
  const handleFormSubmit = function (event) {
    // prevent POST request
    event.preventDefault();
    // create reading list item
    createReadingListItem(event);
    // clear the form
    event.target.title.value = '';
    event.target.author.value = '';
    event.target.category.value = '';
  } 

  const form = document.querySelector("#new-item-form");
  form.addEventListener('submit',handleFormSubmit);

const handleDeletion = function () {
  let deletedList = document.querySelector('ul');
  while (deletedList.firstChild) {
    deletedList.removeChild(deletedList.firstChild);
  }
}
  
  const deleteButton = document.querySelector("#delete-all");
  deleteButton.addEventListener('click', handleDeletion);








 
})
