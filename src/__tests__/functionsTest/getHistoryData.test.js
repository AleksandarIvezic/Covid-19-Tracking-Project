import getHistoryData from '../../helpers/getHistoryData';

describe('Test if getHistoryData', () => {
  test('fetch the data', async () => {
    const data = await getHistoryData();
    expect(data).toBeInstanceOf(Object);
  });
  test('recieved data contain object', async () => {
    const data = await getHistoryData();
    expect.objectContaining(data);
  });
  test('recieved data have property dates', async () => {
    const data = await getHistoryData();
    expect(data).toHaveProperty('dates');
  });
});
