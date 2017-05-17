import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import Keypad from '../index';

describe('<Keypad />', () => {
  test('renders', () => {
    const tree = renderer.create(
      <StaticRouter location={''} context={{}}>
        <Keypad />
      </StaticRouter>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
