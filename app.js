(function(){
  var app = angular.module('library', []);

  app.controller('LibraryController', function(){
    this.bookDetails = bookDetails;

    this.row = 0;
    this.rowHighilited=function(row)
    {
      this.row = row;
    }

    this.newBookDetails = {};
    this.addBookDetails = function(){
      this.bookDetails.push(this.newBookDetails);
    }
  });

  var bookDetails = [{
    name: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    isbnCode: '978-3-16-148410-0',
    numberOfBooks: 10,
    publishDate: "July 8, 1999",
    bookCategory: 'Fiction',
    numberOfBooksIssued: 0
  },
  {
    name: 'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
    isbnCode: '978-3-16-148410-0',
    numberOfBooks: 10,
    publishDate: "Jan 1, 2000",
    bookCategory: 'Fiction',
    numberOfBooksIssued: 0
  }]
})();
