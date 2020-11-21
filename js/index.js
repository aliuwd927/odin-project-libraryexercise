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

function displayToDom(){
    myLibrary.forEach((books)=>{
        let node = document.createElement('div');
        node.classList.add('booksAdded');
        let textnode = document.createTextNode(`${books.title} ${books.author}`);
        node.appendChild(textnode);
        bottomContainer.appendChild(node);

    });
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


     let node = document.createElement('div');
            node.classList.add('booksAdded');
            let textnode = document.createTextNode(myLibrary[i]);
            node.appendChild(textnode);
            bottomContainer.appendChild(node);
*/