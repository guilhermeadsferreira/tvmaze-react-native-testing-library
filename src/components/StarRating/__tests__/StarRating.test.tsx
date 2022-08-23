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

  describe('rating was passed', () => {
    it('show the average', () => {
      const {getByText} = render(
        <StarRating
          rating={{
            average: 7,
          }}
        />,
      );

      expect(getByText('7')).toBeTruthy();
    });

    it('show the icon', () => {
      const {getByTestId} = render(
        <StarRating
          rating={{
            average: 7,
          }}
        />,
      );

      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });

  describe('rating was not passing', () => {
    it('return nothing', () => {
      const {container} = render(<StarRating />);

      expect(container.children.length).toEqual(0);
    });
  });
});
