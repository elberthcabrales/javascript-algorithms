function stairway(steps, i) {
  // Write your code here.
  i += '#';
  if (steps < i.length) return;
  console.log(i);
  stairway(steps, i);
}
// #
// ##
// ###
const n = 3; // steps
stairway(n, '');
