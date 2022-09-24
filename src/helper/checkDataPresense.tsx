export const checkDataPresence = (data:string):RegExpMatchArray | null => {
  const regexp = /[0-9]{1,2}[./]{1}[0-9]{1,2}[./]{1}[0-9]{4}/g;
  const matchedData = data.match(regexp);
  return matchedData;
};
