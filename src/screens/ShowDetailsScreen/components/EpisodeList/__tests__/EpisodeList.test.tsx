import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {showService} from 'src/services/show/showService';
import {showMocks} from 'test/mocks/showMocks';
import {EpisodeList} from '../EpisodeList';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});
const wrapper = ({children}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('EpisodeList', () => {
  test('show all season one episodes at first', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValueOnce({
      seasonNames: ['1', '2'],
      seasons: {
        1: [showMocks.episode1, showMocks.episode2],
        2: [showMocks.episode22, showMocks.episode23],
      },
    });

    // const {getByText} = render(<EpisodeList show={showMocks.show} />, {
    //   wrapper,
    // });

    // await waitFor(() => {
    //   getByText(showMocks.episode1.name);
    // });

    // expect(getByText(showMocks.episode1.name)).toBeTruthy();

    // const {findByText} = render(<EpisodeList show={showMocks.show} />, {
    //   wrapper,
    // });

    // const episode_one = await findByText(showMocks.episode1.name);
    // const episode_two = await findByText(showMocks.episode2.name);

    const {getByText, findByText} = render(
      <EpisodeList show={showMocks.show} />,
      {
        wrapper,
      },
    );

    await findByText(showMocks.episode1.name);

    expect(getByText(showMocks.episode1.name)).toBeTruthy();
    expect(getByText(showMocks.episode2.name)).toBeTruthy();
  });
});
