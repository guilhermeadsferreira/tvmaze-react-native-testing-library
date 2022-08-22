import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('StarRating', () => {
  test('should render the component', () => {
    const {debug} = render(
      <StarRating
        rating={{
          average: 7,
        }}
      />,
    );

    debug();

    expect(true).toBeTruthy();
  });
});
