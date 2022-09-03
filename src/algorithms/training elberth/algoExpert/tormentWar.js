function tournamentWinner(competitions, results) {
  // Write your code here.
  const dic = {};
  const position = { 0: 1, 1: 0 };
  for (let i = 0; i < results.length; i++) {
    const arr = competitions[i];
    const result = results[i];
    if (dic[arr[position[result]]]) {
      dic[arr[position[result]]] += 1;
    } else {
      dic[arr[position[result]]] = 1;
    }
  }
  return Object.keys(dic).reduce((a, b) => ((dic[a] > dic[b]) ? a : b));
}

const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
];
const results = [0, 0, 1];
const expected = 'Python';
const actual = tournamentWinner(competitions, results);
console.log(expected === actual);
