import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoList from '../components/TodoList/TodoList';

import Enzyme, {shallow, render, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16'
import Navbar from '../components/Navbar/Navbar';


describe('<App/>', () => {
    it('renders correctly enzyme', () => {
        const wrapper = shallow(<App />)
      
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    
    it('Should render the <App /> component', ()=> {
        const wrapper = render(<App />)
        expect(wrapper)
    });

    it('Should render the <TodoForm/>', () => {
        const wrapper = render(<TodoForm />)
        expect(wrapper)
    });

    it('Should render the <TodoList/>', () => {
        const wrapper = render(<TodoList />)
        expect(wrapper)
    });

    it('Should render the <NavBar/>', () => {
        const wrapper = render(<Navbar />)
        expect(wrapper)
    });
})












Enzyme.configure({ adapter: new Adapter() })