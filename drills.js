function spaceCase(str){
  //let caseStr = str.replace(/ /g, '%20');
  //return caseStr;

  //OR

  let newString = ''; 

  for (let i = 0; i < str.length; i++) { 
    if (str[i] !== ' ') { 
      newString += str[i]; 
    } else { 
      newString += '%20'; 
    } 
  } return newString;

}
//console.log(spaceCase('corey moore'));
//console.log(spaceCase('www.thinkful.com /tauh ida parv een'));

/* ------------------------------------------------------------------------------------------------ */

function filterWithoutFilter(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if( arr[i] > 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//console.log(filterWithoutFilter([4,6,-3,5,-2,1])); 

/* ------------------------------------------------------------------------------------------------ */

function maxArrSum(arr) {
  const add = (a, b) => a + b;
  const sum = arr.reduce(add);
  return sum;
}

//console.log(maxArrSum([4, 6, -3, 5, -2, 1]));

/* ------------------------------------------------------------------------------------------------ */

function arrMerge(arr1, arr2) {

  let result = []; 
  let i = 0;

  while ((i < arr1.length) || (i < arr2.length)) { 
    if (i < arr1.length) result.push(arr1[i]); 
    if (i < arr2.length) result.push(arr2[i]); 
    i++; 
  } 
  result.sort((a, b) => a - b); 
  return result;
}
//console.log(arrMerge([1,2,6,8,11] , [2,3,5,8,9,10]));

/* ------------------------------------------------------------------------------------------------ */

function removeChars(str, char) {
  for(let x = 0; x < str.length; x++){
    if(char.includes(str[x])){
      str = str.slice(0, x) + '' + str.slice(x + 1);
    }
  }
  return str;
}
// console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

/* ------------------------------------------------------------------------------------------------ */

function products(arr) {
  let newProduct = [];

  for(let i = 0; i < arr.length; i++){
    let mathProd = 1;
    for(let x = 0; x < arr.length; x++){
      if(x !== i)
        mathProd *= arr[x];
    }
    newProduct.push(mathProd);
  }
  return newProduct;
}

// console.log(products([1,3,9,4]));
// output: [108, 36, 12, 27]

/* ------------------------------------------------------------------------------------------------ */

const gameArray = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];

findIndex = (row) => {
  let index = [];
  for(let i = 0; i < row.length; i++){
    if(row[i] === 0){
      index.push(i);
    }
  }
  return index;
}

function TwoD(arr) {
  let newArray = [];
  let column = [];

  arr.forEach(row => {
    let zero = this.findIndex(row);
    if (!zero.length) {
      newArray.push(row);
    } else {
      column = [...column, ...zero];
      newArray.push(row.map(() => 0));
    }
  });

  newArray.forEach(row => {
    column.forEach(col => {
      row[col] = 0;
    });
  });

  return newArray;
}

console.log(TwoD(gameArray));
