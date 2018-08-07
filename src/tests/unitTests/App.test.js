import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom'
import App from '../../App';
import { MemoryRouter, BrowserRouter } from 'react-router-dom'
import UserBooks from '../../components/UserBooks/UserBooks';
import allbooks from '../testResource/allbooks'

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
      Promise.resolve({
          ok: true,
          json: () => data
      })
  )
}
const books = { books: [allbooks] }
const book = { book: allbooks[0] }

describe('[Component] App', () => {
  it('render without crash', () => {          
      expect((<MemoryRouter><App/></MemoryRouter>));        
  });

  it('Expect to be in homepage', () => {    
    fetch = mockFetch(books);
    const wrapper = mount(<MemoryRouter><App/></MemoryRouter>);             
    const homepage = wrapper.find('UserBooks');
    expect(homepage).toHaveLength(1);
  });



  it('Check routes', () => {    
    fetch = mockFetch(books);
    const wrapper = mount(<MemoryRouter><App/></MemoryRouter>);                       
    expect(wrapper.find('Route')).toHaveLength(2);
  })

  it('Check routes', () => {    
    fetch = mockFetch(books);
    const wrapper = shallow(<BrowserRouter><App/></BrowserRouter>);                       
    console.log(wrapper.find('div'));
  })
});


