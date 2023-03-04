import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { books } from './books';
import Book from './Book';
// This is a comment for git test

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById('root'));
export default BookList;