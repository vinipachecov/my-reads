import React from 'react';
import Book from '../Book/Book';


const BookGrid = (props) => {    
  const { bookList } = props;      
  return (
    <ol className="books-grid">      
        { bookList !== undefined ? 
          bookList.map((bookData) => {            
            return (
              <li key={bookData.id}>
              <Book
                bookUpdate={props.bookUpdate}               
                data={bookData}                
              />
            </li>)
          }) 
          :
          null
        }              
    </ol>
  )
};

export default BookGrid;
