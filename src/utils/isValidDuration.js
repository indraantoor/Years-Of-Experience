function isValidDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return start < end ? true : false;
}

export default isValidDuration;
