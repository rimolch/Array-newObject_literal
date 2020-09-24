var array = new Array();
array[0] = " Yaakov ";
array[1] = " John " ;
array[2] = function(name){
console.log( " Hello " + name);
}
array[2](array[0]);
array[2](array[1]);
array[3] = { Course: " HTML , CSS & JS ";
Topic: "JavaScript array new object literal"};
console.log(array[3].Course);
console.log(array[3].Topic);
