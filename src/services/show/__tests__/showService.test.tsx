import {api} from 'src/services/api';
import {showMocks} from 'test/mocks/showMocks';
import {showService} from '../showService';

describe('showService', () => {
  describe('getEpisodes', () => {
    beforeAll(() =>
      jest.spyOn(api, 'get').mockResolvedValueOnce({
        data: showMocks.episodeList,
      }),
    );

    it('when API return episode list return all season names', async () => {
      // const spyFn = jest
      //     .spyOn(api, 'get')
      //     .mockImplementation(() =>
      //     Promise.resolve({data: showMocks.episodeList}),
      //     );
      // Sugar function for mockImplementation
      // jest.spyOn(api, 'get').mockResolvedValue({
      //   data: showMocks.episodeList,
      // });
      // mockResolvedValueOnce -> uma única vez
      const groupedEpisodes = await showService.getEpisodes('250');

      expect(groupedEpisodes.seasonNames).toEqual(['1', '2']);
      expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy();
      expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy();
      expect(groupedEpisodes.seasonNames.length).toBe(2);
    });

    it('when API return episode list return all episodes grouped by season', async () => {
      jest.spyOn(api, 'get').mockResolvedValue({
        data: showMocks.episodeList,
      });
      const groupedEpisodes = await showService.getEpisodes('250');
      const temp1 = groupedEpisodes.seasons[1];
      const temp2 = groupedEpisodes.seasons[2];

      expect(temp1.includes(showMocks.episode1)).toBeTruthy();
      expect(temp1.includes(showMocks.episode2)).toBeTruthy();

      expect(temp2.includes(showMocks.episode22)).toBeTruthy();
      expect(temp2.includes(showMocks.episode23)).toBeTruthy();
    });
  });
});
