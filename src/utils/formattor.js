export const videoDateFormater = (dateString) => {
  const newDate = new Date(dateString).toDateString().split(' ');
  return `${newDate[1]} ${newDate[2]}, ${newDate[3]}`;
};
