import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './index.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  test('should render correctly', () => {
    expect(Enzyme.shallow(<App />)).toMatchSnapshot();
  });
});
