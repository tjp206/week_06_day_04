document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const createReadingListItem = function (event) {
    // separate the input data into variables below
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

  const newReadListItem = document.createElement('li');
    newReadListItem.textContent = `Title: ${title} Author: ${author} Category: ${category}`;
    const list = document.querySelector('ul'); 
    list.appendChild(newReadListItem);
}

// handle form submit for form const below.#new
  const handleFormSubmit = function (event) {
    event.preventDefault(); // prevent POST request
    createReadingListItem(event); // create reading list item
    event.target.title.value = ''; // clear the form
    event.target.author.value = ''; // clear the form
    event.target.category.value = ''; // clear the form
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
