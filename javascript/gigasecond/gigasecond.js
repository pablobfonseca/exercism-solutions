export const gigasecond = (datetime) => {
  return new Date(datetime.getTime() + 1e12);
};
