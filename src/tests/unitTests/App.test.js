import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom'
import App from '../../App';
import { BrowserRouter } from 'react-router-dom'

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

describe('[Component] App', () => {
  it('render without crash', () => {          
      expect((<BrowserRouter><App/></BrowserRouter>));          
  })

  it('Go to search Page correctly by Click on "plus" button', () => {    
    fetch = mockFetch(books);
    const wrapper = shallow(<BrowserRouter><App/></BrowserRouter>);             
    console.log(wrapper.html());
    
    // button.simulate('click');    
    // wrapper.update();
    // setImmediate(() => {
    //   console.log(wrapper.html());
    // })    
  })
});


