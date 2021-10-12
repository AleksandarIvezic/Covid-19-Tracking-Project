const getHistoryData = async (country) => {
  const today = new Date();
  const startingDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 7}`;
  const currentDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const request = await fetch(`https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${startingDate}&date_to=${currentDate}`);
  const response = await request.json();
  return response;
};

export default getHistoryData;
