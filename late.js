// start coding your function here!
function running_late(date) {
  const currDate = new Date(date);
  if (currDate.getHours() >= 22) {
    return 'It is late!';
  } else {
    return 'It is still early!';
  }
}

exports.running_late = running_late;
