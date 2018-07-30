import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../components/Navigation/Header/Header';

describe('[Component] Header', () => {
  it('render without crashing', () => {
    expect(shallow(<Header />));    
  })
    
})
