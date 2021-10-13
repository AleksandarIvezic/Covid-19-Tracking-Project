const getData = async () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 1}`;
  const request = await fetch(` https://api.covid19tracking.narrativa.com/api/${date}`);
  const response = await request.json();
  const data = await response.dates[date];
  data.total = await response.total;
  return data;
};

export default getData;

const display = async () => {
  const data = await getData();
  console.log('displayed data', data);
};

display();
