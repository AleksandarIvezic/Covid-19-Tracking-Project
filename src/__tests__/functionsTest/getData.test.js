import getData from '../../helpers/getData';

describe('Test if getData', () => {
  test('fetch the data', async () => {
    const data = await getData();
    expect(data).toBeInstanceOf(Object);
  });
  test('recieved data contain object', async () => {
    const data = await getData();
    expect.objectContaining(data);
  });
  test('recieved data have property countries and total', async () => {
    const data = await getData();
    expect(data).toHaveProperty('countries');
    expect(data).toHaveProperty('total');
  });
});
