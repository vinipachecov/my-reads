import React from 'react';
import BookGrid from '../BookGrid/BookGrid';
import PropTypes from 'prop-types';

const BookShelf = (props) => {
  const { bookList } = props;  
  return (    
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>      
      <div className="bookshelf-books">
        {          
          <BookGrid bookUpdate={props.bookUpdate} bookList={bookList.length !== undefined  ? bookList: []} />                
        }        
      </div>
    </div>    
  )
};


BookShelf.propTypes = {
  bookList: PropTypes.array.isRequired,
  bookUpdate: PropTypes.func.isRequired
}

export default BookShelf;
