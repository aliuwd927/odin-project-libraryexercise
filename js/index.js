const addButtonElem = document.querySelector('.addBookBtn');
addButtonElem.addEventListener('click',(e) => {
    let formContainerElement = e.target.nextElementSibling;
    //console.log(e.target.nextElementSibling);
    if(formContainerElement = 'formContainer'){
        let showContainer = document.querySelector('.formContainer');
        showContainer.classList.toggle('show');
    };
});

let myLibrary = [];

function Book(title,author){
    // the constructor
    this.title = title;
    this.author = author;
};
const bottomContainer = document.querySelector('.bottomContainer');
const addBookToLibrary = document.querySelector('.addBook');
addBookToLibrary.addEventListener('click',(e) =>{
    // do stuff here
    e.preventDefault(); // prevent refresh when submit
    //get value from formHTML
    //push new book to myLibrary to create book object
    const titleBook = document.querySelector('.title').value;
    const authorBook = document.querySelector('.author').value;
    myLibrary.push(new Book(titleBook, authorBook));


    /*
    This function takes my library
    Information pulled from the book function
    Display to Dom
    */
   displayToDom();

   document.querySelector('.title').value ='';
   document.querySelector('.author').value ='';
});

let shelfRow = 0;

function displayToDom(){
    
        if(shelfRow % 4 == 0){
           console.log(shelfRow);
        } 
        shelfRow++;
}







/*
function displayToDom(){
    let node = document.createElement('div');
        node.classList.add('booksAdded');
    myLibrary.forEach((books) => {
        node.innerHTML = ` ${books.title}<br>
                           ${books.author}`;
    });
    bottomContainer.appendChild(node);
}
*/

/*
    let node = document.createElement('div');
        node.classList.add('booksAdded');
    myLibrary.forEach((books) => {
        node.innerHTML = ` ${books.title}<br>
                           ${books.author}`;
    });
    bottomContainer.appendChild(node);

*/