/* Exercise
Write a constructor for making “Book” objects. We will revisit this in the project 
at the end of this lesson. Your book objects should have the book’s title, author, 
the number of pages, and whether or not you have read the book.

Put a function into the constructor that can report the book info like so: */

let theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not yet read');
let bookObj = {};
console.log(book(theHobbit.info()))


function book(title, author, pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // Section parses out object components

    this.info = function(){
       let info = `${title}, ${author}, ${pages}, ${read}`
       return info; /* Compiles */
    }
    return this.info()
}