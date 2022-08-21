import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
    id:number = 4
    editedBook:Book[]|undefined
    addFlag = false;
    editFlag = false;
    books : Book[] = [
      {id : 1, name: "	The Grass is Always Greener", authors:["Jeffrey Archer"], isbn: "1-86092-049-7" },
      {id : 2, name: "	Murder!", authors:["Arnold Bennett (1867-1931)"], isbn: "1-86092-012-8" },
      {id : 3, name: "A Boy at Seven", authors:["John Bidwell"], isbn: "1-86092-022-5" }

    ];

    editedForm : FormGroup | undefined
    constructor(private fb : FormBuilder) { }

    getBooks(){
      return this.books

    }

    addBooks(book:Book){
      book.id = this.id
      this.id++
      this.books.push(book)

    }

    editBookForm(id:number){
      this.editedBook = this.books.filter((book:Book) =>{
        if(book.id === id){
          return book
        }
      })
      return this.editedBook
  }

  editBook(newBook : Book){
     this.books.map(book =>{
      if(book.id == newBook.id){
        book.name = newBook.name;
        book.authors = newBook.authors;
        book.isbn = newBook.isbn;
        console.log("from services" + book.id)
        console.log("newBook Id " + newBook.id)
        console.log(this.books)
      }
    })
    console.log("newBook " + newBook.id)

  }
  deleteAll(){
    return this.books = []
  }

  delete(id: number){
    console.log("service "+id)
    this.books = this.books.filter(book =>{
      if(book.id !== id){
        return book
      }
    })
    return this.books
  }

}

