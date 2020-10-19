import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import Enzyme, {shallow, render, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16'


describe('<App/>', () => {
    it('renders correctly enzyme', () => {
        const wrapper = shallow(<App />)
      
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    
    it('Should render the <App /> component', ()=> {
        const wrapper = render(<App />)
        expect(wrapper)
    });
})












Enzyme.configure({ adapter: new Adapter() })