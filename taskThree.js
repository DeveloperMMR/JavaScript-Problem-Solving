// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const inpt =  [3, 5, 2, 5, 3, 3,3, 1, 4, 5];

const mxuseNumber = (array)=>{
  const arryofobject = [];
  for(let i=0; i < array.length; i++){
    const isMaxUsed = array.filter(elemt => elemt == array[i]);
    const objArry = {
      "mainNumber": array[i],
      "lengths": isMaxUsed.length,
    };
    arryofobject.push(objArry);
  };

  // return result;
  let maxObject = 0;
  for(let i=0; i < arryofobject.length; i++){
    if(arryofobject[i].lengths > maxObject){
    maxObject = arryofobject[i].lengths;
    };
  };

  const  findResult = arryofobject.find(elmtt => elmtt.lengths == maxObject);

  return findResult.mainNumber;

};

const output = mxuseNumber(inpt);
console.log(output);