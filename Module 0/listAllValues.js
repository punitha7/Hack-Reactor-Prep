function listAllValues(obj) {
  // your code here
  var array = [];
  for(var keys in obj)
  {
    array.push(obj[keys]);
  }
  return array;
}

console.log(listAllValues({
  name : 'Krysten',
  age : 33,
  hasPets : false
}
));
