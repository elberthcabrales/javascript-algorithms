function classPhotos(redShirtHeights, blueShirtHeights) {
  const size = redShirtHeights.length;
  if (size !== blueShirtHeights.length || size < 2) return false;
  let redTaller = false;
  let result = true;
  for (let i = 0; i < size - 1; i++) {
    if (i === 0) redTaller = redShirtHeights[i] > blueShirtHeights[i];
    if (redTaller) {
      result = compareMoreThan(redShirtHeights[i], blueShirtHeights[i]);
    } else {
      result = compareMoreThan(blueShirtHeights[i], redShirtHeights[i]);
    }
    if (!result) return false;
  }
  return result;
}
const compareMoreThan = (a, b) => (a > b);
const arrRed = [5, 8, 1, 3, 4];
const arrBlue = [6, 9, 2, 4, 5];
classPhotos(arrRed, arrBlue);
