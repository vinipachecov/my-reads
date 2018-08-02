import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Header from './components/Navigation/Header/Header';
import SearchPage from './components/Navigation/SearchPage/SearchPage';
import Container from './hoc/Container/Container';
import UserBooks from './components/UserBooks/UserBooks';
import sortBy from 'sort-by';
import * as BooksAPI from './BooksAPI';

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
    userBooks: [],
    showSearchPage: false    
  }

  async componentDidMount() {   
    try {
      const books = await BooksAPI.getAll();
      books.sort(sortBy('title'));      
      this.setState({ userBooks: books });      
    } catch (error) {
      console.log('Erro ao pegar lista de livros!: ', error);      
    }   
  }

  queryBooks = async (query) => {    
    try {
      // Chamada da API
      const res = await BooksAPI.search(query);
      if (res.error === undefined) {
        //
        const { userBooks } = this.state; 

        // Verificar se um livro já está em uma estante
        const bookArray = res.map(book => {
          const alreadyInShelf = userBooks.find(userBook => book.title === userBook.title);
          if (alreadyInShelf) {
            // Adicionar estante do livro 
            return { ...book, shelf: alreadyInShelf.shelf };
          }         
          return book; 
        });        
        return bookArray;      
      }      
      return [];
    } catch (error) {
      console.log(error);
    }        
  }
  

  
  onBookChangeShelf = async (book, shelf, currentShelf) => {        
    // Pegar array original
    
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
            return item;      
          }        
        });
      } else {                
        // deixar de retornar apenas o livro em questão
        newBookList = userBooks.filter(item => {
          return item.id !== book.id
        });      
      }    
      this.setState({ userBooks: newBookList });
    } else {
      // adicionar o livro na lista de livros do usuario 
      newBookList = [...userBooks, { ...book, shelf: shelf }];
      
      this.setState({ userBooks: newBookList });
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
           <UserBooks 
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
