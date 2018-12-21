import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow render without crashing', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">Welcome to React</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
