import Book from "./Book";
import './book.css'
export default function BookStore({books}){
    return(
        <div className="box">
            <h3>Books: {books.length}</h3>
          {
            books.map(book => <Book book= {book}></Book>)
          }
        </div>
    )
}