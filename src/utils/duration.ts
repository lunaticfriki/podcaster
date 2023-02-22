export const getDuration = (milliseconds: number) => {
  const hours = `0${new Date(milliseconds).getHours() - 1}`.slice(-2);
  const minutes = `0${new Date(milliseconds).getMinutes()}`.slice(-2);
  const seconds = `0${new Date(milliseconds).getSeconds()}`.slice(-2);

  const time = `${hours}h:${minutes}m:${seconds}s`;

  return time;
};
