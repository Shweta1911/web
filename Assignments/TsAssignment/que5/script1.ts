class Book{
    bookTitle:String
    bookISBN:number
    bookAuthor:String
    constructor( bookTitle:String,bookISBN:number,bookAuthor:String
        ){
        this.bookTitle=bookTitle
        this.bookISBN=bookISBN
        this.bookAuthor=bookAuthor
    }
    printInfoBook(){
        console.log(`bookTitle=${this.bookTitle} , bookISBN=${this.bookISBN} , bookAuthor=${this.bookAuthor}`)
    }
}



class Library{
    libraryName:String
    libraryLocation:String
    books:Book[]=[]

    constructor(libraryName:String,libraryLocation:String){
        this.libraryName=libraryName
        this.libraryLocation=libraryLocation
    }
    printInfo(){
        console.log(`Library Name=${this.libraryName} , Library Location=${this.libraryLocation}, `)
        for(const customer of this.books){
            customer.printInfoBook()
        }
    }
    addBook(bookTitle:String,bookISBN:number,bookAuthor:String){
        const book=new Book(bookTitle,bookISBN,bookAuthor)
        this.books.push(book)
    }

    searchISBN(bookISBN:Number, bookTitle:String, bookAuthor:String){
        for(const item in this.books){
            if(this.books[item].bookISBN==bookISBN && this.books[item].bookTitle==bookTitle && this.books[item].bookAuthor==bookAuthor){
                this.books[item].printInfoBook()
            }
        }
    }
    
    deleteBook(bookISBN:number){
        // for(let item in this.books){
        //     if(this.books[item].bookISBN==bookISBN){
        //         this.books.splice(item,1)
        //     }
        // }

        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookISBN === bookISBN) {
              this.books.splice(i, 1);
            }
          }
        

    }

    editBook(bookISBN:Number,bookTitle:String){
        for(const item in this.books){
            if(this.books[item].bookISBN==bookISBN){
                this.books[item].bookAuthor=bookTitle
            }
        }
    }
    
}


const lib=new Library("New Library","PUNE")

lib.addBook('book1',1,'author1')
lib.addBook('book2',2,'author1')
lib.addBook('book3',3,'author1')
lib.addBook('book4',4,'author1')
lib.addBook('book5',5,'author1')
lib.addBook('book6',6,'author1')
lib.addBook('book7',7,'author1')
lib.addBook('book8',8,'author1')
lib.addBook('book9',9,'author1')
lib.addBook('book10',10,'author1')
lib.addBook('book11',11,'author1')
lib.addBook('book12',12,'author1')

lib.printInfo()

lib.searchISBN(8,'book8','author1')

lib.deleteBook(8)

lib.printInfo()



