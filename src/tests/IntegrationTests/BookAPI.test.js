import * as BooksAPI from '../../BooksAPI'



function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
      Promise.resolve({
          ok: true,
          json: () => data
      })
  )
}
const books = { books: [{ id: 'book_id', shelf: 'currentlyReading'}] }
const book = { book: { id: 'book_id', shelf: 'currentlyReading'} }


describe('Book API testing', () => {

  it('BooksAPI.get', async () => {
  fetch = mockFetch(book);
  const response = await BooksAPI.get('book_id');   
  expect(response.id).toBe(book.book.id)
  });
  
  it('Get All', async () => {
    fetch = mockFetch(books);
    const response = await BooksAPI.getAll();
    expect(response.length).toBe(1);    
  })

  
  
  it('get Test', async () => { 
      fetch = mockFetch(books);
      const response = await BooksAPI.search('test');                
      expect(response.length).toBe(1)
  })
})
