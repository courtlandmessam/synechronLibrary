(function(){
  var app = angular.module('library', []);

  app.controller('LibraryController', function(){
    this.bookDetails = bookDetails;
  });

  var bookDetails = [{
    name: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    isbnCode: '978-3-16-148410-0',
    numberOfBooks: 10,
    publishDate: 19990708,
    bookCategory: 'Fiction',
    numberOfBooksIssued: 0
  },
  {
    name: 'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
    isbnCode: '978-3-16-148410-0',
    numberOfBooks: 10,
    publishDate: 19990708,
    bookCategory: 'Fiction',
    numberOfBooksIssued: 0
  }]
})();
