function groupSubArray(cars) {
  return cars.reduce((accum, element) => {
    console.log('a', element);
    console.log('r', accum);
    accum[element.make] = [...accum[element.make] || [], element];
    return accum;
  }, {});
}

const cars = [{
  make: 'audi',
  model: 'r8',
  year: '2012',
},
{
  make: 'audi',
  model: 'rs5',
  year: '2013',
},
{
  make: 'ford',
  model: 'mustang',
  year: '2012',
},
{
  make: 'ford',
  model: 'fusion',
  year: '2015',
},
{
  make: 'kia',
  model: 'optima',
  year: '2012',
}];

groupSubArray(cars);
