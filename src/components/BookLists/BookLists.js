import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from '../BookShelf/BookShelf';


const shelfs = ['currentlyReading', 'wantToRead', 'read'];

const BookLists = (props) => {  
  const { bookList } = props;    
  let currentlyReadingList, WantToReadList, ReadList;

  if (bookList > 0 || bookList !== undefined) {
    // filter bookList based on section
    shelfs.forEach(shelf => {    
      switch(shelf) {
        case 'currentlyReading':
          currentlyReadingList = bookList.filter(book => book.shelf === shelf);        
          break
        case 'wantToRead':
          WantToReadList = bookList.filter(book => book.shelf === shelf);
          break
        case 'read':
          ReadList = bookList.filter(book => book.shelf === shelf);
          break
      }   
    });
  }
  
  return (
    <div>
      <div className="list-books-content">
        <BookShelf  bookList={currentlyReadingList} title={'Currently Reading'} />
        <BookShelf bookList={WantToReadList} title={'Want to Read'} />
        <BookShelf bookList={ReadList} title={'Read'} />      
      </div>
        <div className="open-search">
        <Link
          to='/search'                       
          onClick={() => this.setState({ showSearchPage: true })}
        >            
        Add a Book
        </Link>
      </div>                
    </div>    
  )
};

BookLists.propTypes = {

};

export default BookLists;
