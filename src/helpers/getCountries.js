const getCountries = async () => {
  const request = await fetch('http://api.airvisual.com/v2/countries?&key=1eaa663b-a53c-45e6-8939-4b6f904e5123');
  const result = await request.json();
  return result;
};

export default getCountries;
