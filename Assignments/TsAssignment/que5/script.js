var Book = /** @class */ (function () {
    function Book(bookTitle, bookISBN, bookAuthor) {
        this.bookTitle = bookTitle;
        this.bookISBN = bookISBN;
        this.bookAuthor = bookAuthor;
    }
    Book.prototype.printInfoBook = function () {
        console.log("bookTitle=".concat(this.bookTitle, " , bookISBN=").concat(this.bookISBN, " , bookAuthor=").concat(this.bookAuthor));
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library(libraryName, libraryLocation) {
        this.books = [];
        this.libraryName = libraryName;
        this.libraryLocation = libraryLocation;
    }
    Library.prototype.printInfo = function () {
        console.log("Library Name=".concat(this.libraryName, " , Library Location=").concat(this.libraryLocation, ", "));
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var customer = _a[_i];
            customer.printInfoBook();
        }
    };
    Library.prototype.addBook = function (bookTitle, bookISBN, bookAuthor) {
        var book = new Book(bookTitle, bookISBN, bookAuthor);
        this.books.push(book);
    };
    Library.prototype.searchISBN = function (bookISBN, bookTitle, bookAuthor) {
        for (var item in this.books) {
            if (this.books[item].bookISBN == bookISBN && this.books[item].bookTitle == bookTitle && this.books[item].bookAuthor == bookAuthor) {
                this.books[item].printInfoBook();
            }
        }
    };
    Library.prototype.deleteBook = function (bookISBN) {
        // for(let item in this.books){
        //     if(this.books[item].bookISBN==bookISBN){
        //         this.books.splice(item,1)
        //     }
        // }
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].bookISBN === bookISBN) {
                this.books.splice(i, 1);
            }
        }
    };
    Library.prototype.editBook = function (bookISBN, bookTitle) {
        for (var item in this.books) {
            if (this.books[item].bookISBN == bookISBN) {
                this.books[item].bookAuthor = bookTitle;
            }
        }
    };
    return Library;
}());
var lib = new Library("New Library", "PUNE");
lib.addBook('book1', 1, 'author1');
lib.addBook('book2', 2, 'author1');
lib.addBook('book3', 3, 'author1');
lib.addBook('book4', 4, 'author1');
lib.addBook('book5', 5, 'author1');
lib.addBook('book6', 6, 'author1');
lib.addBook('book7', 7, 'author1');
lib.addBook('book8', 8, 'author1');
lib.addBook('book9', 9, 'author1');
lib.addBook('book10', 10, 'author1');
lib.addBook('book11', 11, 'author1');
lib.addBook('book12', 12, 'author1');
lib.printInfo();
lib.searchISBN(8, 'book8', 'author1');
lib.deleteBook(8);
lib.printInfo();
