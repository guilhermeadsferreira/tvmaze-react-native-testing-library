import {render, act, fireEvent} from '@testing-library/react-native';
import React, {createRef} from 'react';
import {Modalize} from 'react-native-modalize';
import {SeasonModal} from '../SeasonModal';

describe('SeasonModal', () => {
  test('should show all season option', () => {
    const ref = createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={ref}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={season => console.log(season)}
      />,
    );

    act(() => {
      ref.current?.open();
    });

    // expect(getAllByText('Season', {exact: false}).length).toEqual(3);
    // expect(getAllByText(/Season/, {exact: false}).length).toEqual(3);
    expect(getAllByText(/season/i, {exact: false}).length).toEqual(3);
  });

  test('should call onSelectSeason with correct season when season option was pressed', () => {
    const ref = createRef<Modalize>();

    const onSelectSeasonMock = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={ref}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={onSelectSeasonMock}
      />,
    );

    act(() => {
      ref.current?.open();
    });

    fireEvent.press(getByText(/season 2/i));

    expect(onSelectSeasonMock).toBeCalledWith('2');
  });
});
