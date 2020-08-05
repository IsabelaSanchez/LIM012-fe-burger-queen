import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Home from './Components/Home';
import Waiter from './Components/Waiter-choice';

test('renders PEDIDOS at button', () => {
  const { getByText } = render(<Home />);
  const buttonElement = getByText(/PEDIDOS/i);
  expect(buttonElement).toBeInTheDocument();
});

test('render COCINA at button', () => {
  const { getByText } = render(<Home />);
  const buttonElement = getByText(/COCINA/i);
  expect(buttonElement).toBeInTheDocument();
});

test('App renderiza sin problemas', () => {
  shallow(<App />);
});

test('Home renderiza', () => {
  shallow(<Home />);
});

test('Waiter-choice renderiza', () => {
  shallow(<Waiter />);
});

test('Bienvenida no existe', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to my ReactApp!</h2>;
  expect(wrapper.contains(welcome)).toEqual(false);
});
