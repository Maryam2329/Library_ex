/* JAVASCRIPT file */

let myLibrary=[];
const body = document.querySelector('body');

function Book(title, author, pages, read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.info = function(){
        let readOrNot=["",""];
        outer :
        if (read===true){
            break outer;
        } else {
            readOrNot[0]="not";
            readOrNot[1]="yet";
        }
        return title+" by "+author+", "+pages+" pages, "+readOrNot[0]+" read "+readOrNot[1]+".";
    }
}

const Germinal = new Book("Germinal", "Emile Zola", 250, false);
myLibrary.push(Germinal);
const Livre2 = new Book("livre2","author2",400,false);
myLibrary.push(Livre2);
const Livre3 = new Book("livre3","author3",100,false);
myLibrary.push(Livre3);
console.log(Germinal.info());

function addBooktoLibrary(){
    let bookName = prompt("Please write the name of the book you wanna store");// get the name of the book in a variable
    let authorName = prompt("Please write the name of the author of this book.");// get the name of the author in a variable
    let numberOfPages = prompt("Please write the number of pages this book has.");// get the number of pages of the book in a variable
    let isRead = prompt("Have you read this book ?","y/n"); // ask if the book is read or not
    let isReallyRead = false;
    if (isRead=="y"){
        isReallyRead=true;
    };
    const userBook = new Book(bookName,authorName,numberOfPages,isReallyRead) ;
    myLibrary.push(userBook);
    return userBook;
}

function buttonClick(event) {
    let warn = "preventDefault() won't let you click this, as the connection to server is inexistant!<br>";
    alert(warn);
    event.preventDefault();
};

function displayBook(book){
    var bookTitle=document.createElement('div');
    bookTitle.textContent="Title : "+book.title;
    bookTitle.style.fontWeight='bold';
    bookTitle.style.paddingTop='15px';

    document.body.appendChild(bookTitle);
    var bookAuthor=document.createElement('div');
    bookAuthor.textContent="Author : "+book.author;
    document.body.appendChild(bookAuthor);
    var bookPageNumber=document.createElement('div');
    bookPageNumber.textContent="Number of pages : "+book.pages;
    document.body.appendChild(bookPageNumber);
    // Is the book read ?
    var readForm = document.createElement('form');
    var readLabel = document.createElement('label');
    readLabel.setAttribute('type','id-checkbox');
    readLabel.textContent = 'Read : ';
    var readCheckbox = document.createElement('input');
    readCheckbox.setAttribute('type','checkbox');
    readCheckbox.setAttribute('id','id-checkbox');
    if(book.read===true){
        readCheckbox.checked=true;
    }else{
        readCheckbox.checked=false;
    }
    readForm.appendChild(readLabel);
    readForm.appendChild(readCheckbox);
    document.body.appendChild(readForm);

    // How to change the read status on a book
    readCheckbox.addEventListener('click',()=>{
        if (readCheckbox.checked===true){
            book.read=true;
        } else {
            book.read=false;
        }
    });

    // Button to remove a book
    var button=document.createElement('button');
    button.textContent="Remove";
    bookTitle.style.paddingBottom='5px';
    document.body.appendChild(button);
    button.addEventListener('click',()=>{
        document.body.removeChild(bookTitle);
        document.body.removeChild(bookAuthor);
        document.body.removeChild(bookPageNumber);
        document.body.removeChild(bookIsRead);
        document.body.removeChild(button);
    });
}

function displayBookS(array){
    for (var x of array){
        console.log(x);
        displayBook(x)
    }
    
    var space=document.createElement('br');
    document.body.appendChild(space);
    document.body.appendChild(space.cloneNode());

    // HOW TO ENTER A NEW BOOK 
    var button=document.createElement('button');
    button.textContent='Add a book';
    document.body.appendChild(button);
    button.addEventListener('click',()=>{
        // Creation of thr form
        var form=document.createElement('form');
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit.php");
        // book name
        var BN = document.createElement("input");
        BN.setAttribute("type", "text");
        BN.setAttribute("name", "bookName");
        BN.setAttribute("placeholder", "Book Name");
        BN.setAttribute("id","bookName");
        var BNlabel = document.createElement("label");
        BNlabel.setAttribute("for","bookName");
        BNlabel.textContent="Name of the Book : ";
        // book author
        var BA = document.createElement("input");
        BA.setAttribute("type", "text");
        BA.setAttribute("name", "bookAuthor");
        BA.setAttribute("placeholder", "Book Author");
        BA.setAttribute("id","bookAuthor");
        var BAlabel = document.createElement("label");
        BAlabel.setAttribute("for","bookAuthor");
        BAlabel.textContent="Author of the Book : ";
        // book pages
        var BP = document.createElement("input");
        BP.setAttribute("type", "text");
        BP.setAttribute("name", "bookPages");
        BP.setAttribute("placeholder", "Number of pages");
        BP.setAttribute("id","bookPages");
        var BPlabel = document.createElement("label");
        BPlabel.setAttribute("for","bookPages");
        BPlabel.textContent="Number of pages : ";
        // book read ?
        var BR = document.createElement("input");
        BR.setAttribute("type", "text");
        BR.setAttribute("name", "bookRead");
        BR.setAttribute("placeholder", "y/n");
        BR.setAttribute("id","bookRead");
        var BRlabel = document.createElement("label");
        BRlabel.setAttribute("for","bookRead");
        BRlabel.textContent="Have you already read this book?";
        // Submit button
        var submitButton = document.createElement("button");
        submitButton.setAttribute("type","submit");
        submitButton.textContent = "Validate book";
        // Adding all of it to the form
        form.appendChild(BNlabel);
        form.appendChild(BN);
        form.appendChild(space.cloneNode());
        form.appendChild(BAlabel);
        form.appendChild(BA);
        form.appendChild(space.cloneNode());
        form.appendChild(BPlabel);
        form.appendChild(BP);
        form.appendChild(space.cloneNode());
        form.appendChild(BRlabel);
        form.appendChild(BR);
        form.appendChild(space.cloneNode());
        form.appendChild(submitButton);
        // Adding the form to the page
        document.body.appendChild(form);
        // Prevent exception from submit Button as it is not linked to a server
        submitButton.addEventListener("click", buttonClick, false);
    });

}

displayBookS(myLibrary);
console.log(myLibrary);
