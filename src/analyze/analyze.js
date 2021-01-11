const analyze = (arr) => {

  let length = arr.length;
  let average = Math.round(arr.reduce((a, b) => a + b, 0) / length);
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  const object = {
    average,
    min,
    max,
    length
  }

  return object;
}

export default analyze;