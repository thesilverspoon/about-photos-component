import React from 'react';
import TestRenderer from 'react-test-renderer';

it('renders correctly', () => {
  const test = TestRenderer
    .create(<div>
      <div className="restaurant">
        About
      </div>
      <div className="description">
        something
      </div>
    </div>)
    .toJSON();
  expect(test).toMatchSnapshot();
});
