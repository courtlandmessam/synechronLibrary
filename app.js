(function(){
  var app = angular.module('app', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/add',
        {
          controller: 'LibraryController',
          templateUrl: 'add.html'
        })
      .when('/edit',
        {
          controller: 'LibraryController',
          templateUrl: 'edit.html'
        })
      .when('/delete',
          {
            controller: 'LibraryController',
            templateUrl: 'delete.html'
          })
      .otherwise({redirectTo: '/edit'});
  });


  app.controller('LibraryController', function(){
    this.bookDetails = bookDetails;

    this.row = 0;
    this.rowHighilited=function(row)
    {
      this.row = row;
    }

    this.newBookNumber = {};
    this.editBookNumber = function(row){
      this.row = row;
      row.numberOfBooks = (angular.copy(this.newBookNumber));
    }

    this.newBookDetails = {};
    this.addBookDetails = function(){
      bookDetails.unshift(angular.copy(this.newBookDetails));
      this.newBookDetails = {};
    }

    this.deleteBookDetails = function(row){
      this.row = row;
      bookDetails.splice(row[$index], 1);
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
