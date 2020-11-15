const addButtonElem = document.querySelector('.addBook');
addButtonElem.addEventListener('click',(e) => {
    //console.log(e.target.classList.value);
    let addBookHide = e.target;
    if(addBookHide === addButtonElem){
        //console.log(addBookHide);
        const containerHide = addBookHide;
        console.log(containerHide);
    }
});

let myLibrary = [];

function Book(){
    // the constructor
}

function addBookToLibrary(){
    // do stuff here
}