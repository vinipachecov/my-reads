import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Header from './components/Navigation/Header/Header';
import SearchPage from './components/Navigation/SearchPage/SearchPage';
import Container from './hoc/Container/Container';
import BookLists from './components/BookLists/BookLists';
import * as BooksAPI from './BooksAPI';
import Book from './components/Book/Book';

const bookAreas = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy',
 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business',
 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling',
 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football',
 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King',
 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery',
 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 
 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare',
 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 
 'Web Development', 'iOS'
];

class BooksApp extends React.Component {
  state = {       
    userBooks: []    
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ userBooks: books });
    })
  }

  queryBooks = async (query) => {
    console.log('tema a ser pesquisado =  ', query );
    try {
      const res = await BooksAPI.search(query);
      if (res.error === undefined) {
        return res;      
      }      
      return [];
    } catch (error) {
      console.log(error);
    }        
  }
  

  updateShelfs = async (array) => {
    // return new Promise(async resolve => {
    //   const newBookList = [];                  
    //     array.forEach( async bookId => {          
    //       const book = await BooksAPI.get(bookId); 
    //       console.log(book);                                 
    //       const { allBooks } = this.state;
    //       allBooks.push(Book);          
    //     });      
    //     resolve();
      // });            
  }  

  onBookChangeShelf = async (book, shelf, currentShelf) => {        
    // Pegar array original
    console.log(book, shelf);
    const { userBooks } = this.state;
    let newBookList;

    // Verificar se o livro está em alguma instante
    if (currentShelf !== 'none') {
      
      // Descobrir se o livro deve ser retirado da lista
      if (shelf !== 'none') {
        // modificar array atual adicionando o livro na estante correta
        // alterando o parametro shelf do item escolhido       
        newBookList = userBooks.map(item => {
          if (item.title === book.title) {
            return { ...book, shelf: shelf };
          } else {
            return { ...item};      
          }        
        });
      } else {                
        // deixar de retornar apenas o livro em questão
        newBookList = userBooks.filter(item => {
          return item.title !== book.title
        });      
      }    
      this.setState({ userBooks: newBookList });
    } else {
      // adicionar o livro na lista de livros do usuario 
      userBooks.push({ ...book, shelf: shelf });
      this.setState({ userBooks });
    }
   
    // Chamada na API e atualizando o state do react
    await BooksAPI.update(book, shelf);  
  }


  onHeaderChange = (status) =>{
    this.setState({ showSearchPage: status });
  }    

  render() {    
    return (
      <Layout>        
        <Container >
        <Header search={this.state.showSearchPage}>
           <Route path='/search' render={ ({ history }) => (
             <SearchPage 
              onSearch={this.onHeaderChange}
              queryBooks={this.queryBooks}      
              bookUpdate={this.onBookChangeShelf}   
              userBooks={this.state.userBooks}
              bookAreas={bookAreas}
            />
            )} />                           
         <Route exact path='/' render={ () => (  
           <BookLists 
            bookList={this.state.userBooks}
            bookUpdate={this.onBookChangeShelf}
           />
          )} />             
          </Header>     
        </Container>       
      </Layout>
    )
  }
}

export default BooksApp
