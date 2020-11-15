const addButtonElem = document.querySelector('.addBookBtn');
addButtonElem.addEventListener('click',(e) => {
    //e.preventDefault();
    let test = e.target.nextElementSibling;
    console.log(e.target.nextElementSibling);
    if(test = 'formContainer'){
        let hideContainer = document.querySelector('.formContainer');
        hideContainer.classList.toggle('show');
    }
});

let myLibrary = [];

function Book(){
    // the constructor
}

function addBookToLibrary(){
    // do stuff here
}