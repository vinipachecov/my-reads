import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from '../../Book/Book';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import PropTypes from 'prop-types';


export default class SearchPage extends Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    queryBooks: PropTypes.func.isRequired,
    bookUpdate: PropTypes.func.isRequired,
    userBooks: PropTypes.array.isRequired,
    bookAreas: PropTypes.array.isRequired
  }

  state = {
    searchText: '',
    searchBooks: []   
  }

  componentDidMount() {
    this.props.onSearch(true);        
  }

  compareShelfs = (results) => {    
    const { userBooks } = this.props;    

    const newList = results.map(bookFromSearch => {
      const res = userBooks.find(userBook => userBook.id === bookFromSearch.id);
      if (res !== undefined && res !== null) {
        return { ...bookFromSearch, shelf: bookFromSearch.shelf };
      }
      else return { ...bookFromSearch, shelf: 'none' };       
    });
    newList.sort(sortBy('title'));
    this.setState({ searchBooks: newList });
  }

  onSearchTextChange = async (event) => {      
    const { bookAreas } = this.props;
    const { value } = event.target;
    let searchBooks;               
    this.setState({ searchText: value});                 
    if (value !== ' ' && value !== '') {                    
      const match = new RegExp(escapeRegExp(value), 'i');
      // Busca areas de livros disponíveis para buscar na API
      const query = bookAreas.find(theme => match.test(theme));     
      if (query !== undefined) {
        searchBooks = await this.props.queryBooks(query);                   
      }      
      
      // Tendo algum resultado é feita verificação das estantes 
      // de cada livro
      if (searchBooks !== undefined) {             
        this.compareShelfs(searchBooks);        
      }
    } else {
      this.setState({ searchBooks: [] });
    }    
  }




  render() {
    const { bookUpdate } = this.props;
    const { searchText, searchBooks } = this.state;    
    return (             
      <div>
        <div className="search-books-bar">
        <Link
          className="close-search"
          onClick={() => this.props.onSearch(false) }
          to='/'
        >
        </Link>        
        <div className="search-books-input-wrapper">        
          <input 
            value={searchText} 
            type="text" 
            placeholder="Digite algum tema de livro!"
            onChange={event => this.onSearchTextChange(event)}            
          />
        </div>       
        </div> 
        <div className="search-books-results">
          <ol className="books-grid">                          
                {searchBooks.length > 0 ?
                  searchBooks.map(item => {
                    return (
                      <li key={item.id}>
                        <Book
                          data={item}
                          bookUpdate={bookUpdate}
                        />
                      </li>
                    )
                  })
                  :
                  <div></div>
                }              
          </ol>
        </div>    
      </div>             
    );
  }
};
