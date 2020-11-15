const addButtonElem = document.querySelector('.addBook');
addButtonElem.addEventListener('click',(e) => {
    let test = e.target.nextElementSibling;
    console.log(e.target.nextElementSibling);
    if(test = 'formContainer'){
        let hideContainer = document.querySelector('.formContainer');
        hideContainer.classList.toggle('show');
    }else{
        console.log('chk logic');
    }
});

let myLibrary = [];

function Book(){
    // the constructor
}

function addBookToLibrary(){
    // do stuff here
}