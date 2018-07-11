import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';


const BookGrid = (props) => {    
  const { bookList } = props;      
  return (
    <ol className="books-grid">      
        { bookList !== undefined ? 
          bookList.map((bookData) => {
            console.log(bookData)
            return (
              <li >
              <Book               
                authors={bookData.authors}
                title={bookData.title}
                subtitle={bookData.subtitle}
                imageLinks={bookData.imageLinks}
              />
            </li>)
          }) 
          :
          null
        }              
    </ol>
  )
};

BookGrid.propTypes = {

};

export default BookGrid;
