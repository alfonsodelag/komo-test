import React from 'react';
import { mockGetUserInfo } from './mock-getUserInfo';

describe('get user Info', () => {
  it('call mock api', async () => {
    const apiResponse = await mockGetUserInfo('instagram');

    expect(apiResponse).toBeTruthy();

    expect(apiResponse).toStrictEqual([
      {
        avatar_url: 'dummyUrl',
        bio: 'Bio from the creator',
        followers: '124',
        id: 1,
        name: 'Testing',
        latestPost: [],
      },
    ]);
  });
});
