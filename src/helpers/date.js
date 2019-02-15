export const defaultDate = () => {
  let today = new Date();
  let month = today.toLocaleString('en-us', { month: 'long' });
  let date = month + " " + today.getDate() + ", " + today.getFullYear();

  return date;
}

export const dateToString = (date) => {
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  let year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export const dateStringToUnix = (dateString) => {
  return dateString.getTime() / 1000;
}

export const unixDateToTime = (unixDate) => {
  let date = new Date(unixDate * 1000)
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();

  return convert24HourTime(hours, minutes.substr(-2))
}

function convert24HourTime(hours, minutes) {
  if (hours > 12) {
    return (hours - 12) + ":" + minutes + " PM"
  } else {
    return hours + ":" + minutes + " AM"
  }
}

