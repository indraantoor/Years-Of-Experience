import moment from "moment";

function getCurrentDateFormatted() {
  const date = new Date();
  return moment(date).format("YYYY-MM-DD");
}

export default getCurrentDateFormatted;
