import React from 'react';
import BookGrid from '../BookGrid/BookGrid';

const BookShelf = (props) => {
  const { bookList } = props;  
  return (
    bookList.length !== undefined  ?
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>      
      <div className="bookshelf-books">
        {          
          bookList.length > 0 ?
            <BookGrid bookUpdate={props.bookUpdate} bookList={bookList} />      
          :
          <div>Adicione algum livro!</div>
        }        
      </div>
    </div>
    :
    <div>empty</div>
  )
};

export default BookShelf;
