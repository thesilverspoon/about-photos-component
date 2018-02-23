import React from 'react';
import TestRenderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<div>Hello World</div>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

