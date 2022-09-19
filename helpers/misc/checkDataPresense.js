export const checkDataPresence = (data) => {
  const regexp = /[0-9]{2}[./]{1}[0-9]{2}[./]{1}[0-9]{4}/g;
  const matchedData = data.match(regexp);
  return matchedData;
};
