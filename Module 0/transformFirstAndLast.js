function transformFirstAndLast(array) {
  // your code here
var obj = {};
var len = array.length;
obj[array[0]] = array[len-1];

return obj;

}
 
 console.log( transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']));
