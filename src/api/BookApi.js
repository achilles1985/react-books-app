"use strict";

//This file is mocking a web API by hitting hard coded data.
var books = require('./BookData').books;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(book) {
	return book.title.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var BookApi = {
	getAllBooks: function() {
		return _clone(books);
	},

	getBookById: function(id) {
		var book = _.find(books, {id: id});
		return _clone(book);
	},
	
	saveBook: function(book) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the book to the DB via AJAX call...');
		
		if (book.id) {
			var existingAuthorIndex = _.indexOf(books, _.find(books, {id: book.id}));
			books.splice(existingAuthorIndex, 1, book);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			book.id = _generateId(book);
			books.push(_clone(book));
		}

		return book;
	},

	deleteAuthor: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(books, { id: id});
	}
};

module.exports = BookApi;