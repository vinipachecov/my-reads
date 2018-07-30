import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Container from '../../hoc/Container/Container';
import Layout from '../../hoc/Layout/Layout';
import Aux from '../../hoc/Aux/Aux';


const children = <div>
  Hello World!
</div>


describe('Teste dos High Order Components da UI ', () => {

  it('container', () => {        
    const wrapper = shallow(<Container>
      {children}
    </Container>);
    expect(wrapper.contains(children)).toEqual(true);
  }); 


  it('Layout', () => {
    const wrapper = shallow(<Layout>
      {children}
    </Layout>);
    expect(wrapper.contains(children)).toEqual(true);    
  });
  

  it('Aux', () => {
    const wrapper = shallow(<Aux>
      {children}
    </Aux>);
    expect(wrapper.contains(children)).toEqual(true);    
  });
  

})


