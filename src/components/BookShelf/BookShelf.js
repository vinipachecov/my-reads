import React from 'react';
import PropTypes from 'prop-types';
import BookGrid from '../BookGrid/BookGrid';

const BookShelf = (props) => {
  const { bookList } = props;  
  return (
    bookList.length !== undefined  ?
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>      
      <div className="bookshelf-books">
        <BookGrid bookList={bookList} />      
      </div>
    </div>
    :
    <div>empty</div>
  )
};

BookShelf.propTypes = {

};

export default BookShelf;
