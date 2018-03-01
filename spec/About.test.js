import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import About from '../client/src/About.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('About Component', () => {
  test('should render correctly', () => {
    expect(shallow(<About />)).toMatchSnapshot();
  });
});

describe("rendered `About`", () => {
  it("received two props", () => {
    const component = shallow(<About />);
    expect(component.props().children.length).toBe(2);
  });
});
