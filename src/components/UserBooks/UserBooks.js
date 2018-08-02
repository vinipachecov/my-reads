import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../BookShelf/BookShelf';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';


const shelfs = ['currentlyReading', 'wantToRead', 'read'];

const UserBooks = (props) => {  
  const { bookList } = props;      
  let currentlyReadingList = [];
  let  WantToReadList = [];
  let ReadList = [];

  if (bookList > 0 || bookList !== undefined) {
    // filter bookList based on section      
    [
      currentlyReadingList,
      WantToReadList,
      ReadList
     ] = shelfs.map(shelf => bookList.filter(book => book.shelf === shelf))           
  } 
  
  return (
    <div>
      <div className="list-books-content">
        <BookShelf bookUpdate={props.bookUpdate} bookList={currentlyReadingList} title={'Currently Reading'} />
        <BookShelf bookUpdate={props.bookUpdate} bookList={WantToReadList} title={'Want to Read'} />
        <BookShelf bookUpdate={props.bookUpdate} bookList={ReadList} title={'Read'} />      
      </div>
        <div className="open-search">
        <Link
          to='/search'                                 
        >            
        Add a Book
        </Link>
      </div>   
      <Footer />             
    </div>    
  )
};

  UserBooks.propTypes = {
    bookList: PropTypes.array.isRequired,
    bookUpdate: PropTypes.func.isRequired
}

export default UserBooks;
