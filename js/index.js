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

function book(title,author){
    // the constructor
    this.title = title;
    this.author = author;
     
};
const bottomContainer = document.querySelector('.bottomContainer');
const addBookToLibrary = document.querySelector('.addBook');
addBookToLibrary.addEventListener('click',(e) =>{
    // do stuff here
    e.preventDefault(); // prevent refresh when submit
    //take info from formHTML
    //push info to myLibrary
    const titleBook = document.querySelector('.title').value;
    const authorBook = document.querySelector('.author').value;
    myLibrary.push(new book(titleBook, authorBook));


    /*
    This function takes my library
    Information pulled from the book function
    Display to Dom
    */
   displayToDom();
});

function displayToDom(){
    myLibrary.forEach((books, index) =>{
             
        if( index % 4 === 0 ){
            bottomContainer.innerHTML += `<div class='row'></div>`;
            
        }else{
            alert('chk logic');
        }

        console.log(index);
        /*
            const row = document.querySelector('.row');
            row.innerHTML = `<div class='booksAdded'>  
                                ${books.title}<br>
                                ${books.author}
                            </div> `;
                            */
    });  
}
