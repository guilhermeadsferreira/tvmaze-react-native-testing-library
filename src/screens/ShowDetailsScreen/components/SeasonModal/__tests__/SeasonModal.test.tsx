import {render} from '@testing-library/react-native';
import React from 'react';
import {SeasonModal} from '../SeasonModal';

describe('SeasonModal', () => {
  test('should render the component', () => {
    const {} = render(
      <SeasonModal
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={season => console.log(season)}
      />,
    );
  });
});
