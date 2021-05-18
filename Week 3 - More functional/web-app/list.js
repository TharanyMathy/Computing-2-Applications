const List = Object.create(null);

const new_array = Array;
List.sequence = (n) => new_array(n).fill().map((ignore, k) => k);

List.transpose = (list) => list[0].map(
    (ignore, colIndex) => list.map((row) => row[colIndex]));

//returns an array with a start,end and certain steps
List.range = (start, end, step) => new_array.from(
    {length: (end - start) / step + 1}, (_, i) => start + (i * step));

//Confused about curry stuff

// List.reject = (function) => (array) => array; //not sure about this 


//return first element of array
List.first = (array) => array.find((element) => element);

//return last element of array
List.last = (array) => array[array.length - 1];

//return array with first element removed
List.rest = (array) => array.slice(1);

//return array with last element removed
List.most = (array) => array.slice(0,-1);

// return a function applied to 2 arrays
List.zip = (func) => (arr1) => (arr2) => arr1.map((ignore, index) =>
func(arr1[index],arr2[index]));




// List.zip = (function) => (array) => (array) => array; // not sure 

export default Object.freeze(List);
