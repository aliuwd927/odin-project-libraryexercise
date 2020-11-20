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
    //get value from formHTML
    //push new book to myLibrary to create book object
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
        console.log(myLibrary);
        let test = 0;
        for(let i = 0; i < myLibrary.length; i++){
            console.log(myLibrary[i]);
            if((myLibrary[i] % 4) === 0){
                console.log('If you saw nice once');
            }else{
                console.log('chk logic');
            }
        }
        
}










 /*
    myLibrary.forEach((books, index) =>{
             
        if( index % 4 === 0 ){
            bottomContainer.innerHTML += `<div class='row'></div>`;
            
        }else{
            alert('chk logic');
        }

        console.log(index);
        
            const row = document.querySelector('.row').lastChild.nodeName;
            row.innerHTML = `<div class='booksAdded'>  
                                ${books.title}<br>
                                ${books.author}
                            </div> `;
                            
    });  
        */