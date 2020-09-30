exports.min = function min(array = false) {
  if (array.length === 0 || !array) {
    return 0;
  }
  const min = array.reduce((min, item) => item < min ? item : min);
  return min;
}

exports.max = function max(array = false) {
  if (array.length === 0 || !array) {
    return 0;
  }
  const max = array.reduce((max, item) => item > max ? item : max);
  return max;
}

exports.avg = function avg(array = false) {
  if (array.length === 0 || !array) {
    return 0;
  }
  const sum = array.reduce((sum, item) => sum + item);
  const average = sum / array.length
  return average;
}
