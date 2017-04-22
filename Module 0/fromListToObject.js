function fromListToObject(array) {
  // your code here
    
  var obj = {};
  len = array.length;
  
for(var i =0;i<len;i++){
  
    
  obj[array[i][0]] = array[i][1];
  
}
 
 return obj;
  
}

console.log(fromListToObject
([['make', 'Ford'], 
['model', 'Mustang'],
['year', 1964]]));
