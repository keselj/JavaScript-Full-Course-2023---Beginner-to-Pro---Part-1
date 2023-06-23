// Exercise 11a

const nums = [10,20,30];
nums[2] = 99;
console.log(nums)

// Exercise 11b 

function getLatsValue(array) {
  return array[array.length -1];
}

console.log(getLatsValue([1,20,22,24,5]));

// Exercise 11c

function arraySwap(array1) {
  let firstValue = array1[array1.length -1];
  let lastValue = array1[0];
  array1[0] = lastValue;
  array1[array1.length -1] = firstValue;
  return array1;
}

console.log(arraySwap([1,20,22,24,5]));
console.log(arraySwap(['hi', 'hello', 'good']));

// Exercise 11d

for(let i = 0; i < 11; i+= 2) {
  console.log(i);
}

// Exercise 11e

for(let i = 5; i >= 0; i--) {
  console.log(i)
}

// Exercise 11f

let i = 0;

while(i < 11) {
  console.log(i)
  i += 2;
}

let j = 5;

while(j >= 0) {
  console.log(j);
  j--;
}

// Exercise 11g and 11h

function addOneToArray(array2) {
  for(let i = 0; i < array2.length; i++) {
    array2[i]++
  }
  return array2
}

console.log(addOneToArray([1,2,3]));

// Exercise 11i

function addArrays(array3, num) {
  for(let i = 0; i < array3.length; i++){
    array3[i] += num;
  }

  return array3;
}

console.log(addArrays([1,2,3],2));
console.log(addArrays([1,2,3],3));
console.log(addArrays([-2,-1,0,99],2));

// Exercise 11j

function addArraysTogether(array4, array5) {
  let array4And5 = []
  for(let i = 0; i < array4.length; i++){
    array4And5.push(array4[i] + array5[i]);
  }
  return array4And5;
}

console.log(addArraysTogether([1,1,2], [1,1,3]));

console.log(addArraysTogether([1,2,3], [4,5,6]));


// Exercise 11k

function countPositive(nums) {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      count++
    }
  }
  return count
}

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));


// Exercise 11l and 11m

function minMax(nums) {
  let object1 = {
    min: undefined,
    max: undefined
  }
  if(nums.length === 0){
    object1.min = null;
    object1.max = null;
  }else {
    object1.max = Math.max(...nums);
    object1.min = Math.min(...nums);
  }
  return object1;
}

console.log(minMax([1,-3,5]));
console.log(minMax([-2,3,-5,7,10]));
console.log(minMax([]));
console.log(minMax([3]));


// Exercise 11n

function countWords(words) {
  let object2 = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if(!object2[word]){
      object2[word] = 1;
    } else {
      object2[word]++;
    }
    
  }
  return object2

}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));

// Exercise 11o and 11p

function arrayOfStrings(array6) {
  let result = '';
  for (let i = 0; i < array6.length; i++){
    if (array6[i] === 'search') {
      result = i;
      break
    } else {
      result = -1
    }
  }
  return result;
}

console.log(arrayOfStrings(['hello', 'world', 'search', 'good']));
console.log(arrayOfStrings(['not', 'found']));
console.log(arrayOfStrings(['hello', 'world', 'search', 'good', 'search']));


// Exercise 11q

function findIndex(array, word) {
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] === word) {
      result = i;
      break
    } else {
      result = -1;
    }
  }
  return result;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

// Exercise 11r

function removeEgg(foods) {
  let newFoods = [];
  for(let i = 0; i < foods.length; i++) {
    if(foods[i] === 'egg') {
      continue;
    } else {
      newFoods.push(foods[i]);
    }
  }
  return newFoods
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// Exercise 11s and 11t

function removeEgg2(foods) {
  let reversFoods = foods.reverse();
  let newFoods = [];
  let eggCount = 0;
  for(let i = 0; i < foods.length; i++) {
    if(reversFoods[i] === 'egg' && eggCount < 2) {
      eggCount ++;
      continue;
    } else {
      newFoods.push(reversFoods[i]);
    }
  }
  return newFoods.reverse();
}

console.log(removeEgg2(['egg', 'apple', 'egg', 'egg', 'ham']));

// Exercise 11u

function removeEgg2(foods) {
  let reversFoods = foods.slice().reverse();
  let newFoods = [];
  let eggCount = 0;
  for(let i = 0; i < foods.length; i++) {
    if(reversFoods[i] === 'egg' && eggCount < 2) {
      eggCount ++;
      continue;
    } else {
      newFoods.push(reversFoods[i]);
    }
  }
  return newFoods.reverse();
}

console.log(removeEgg2(['egg', 'apple', 'egg', 'egg', 'ham']));

// Exercise 11v

let u = 0;

while (u <= 20) {
  if(u % 3 === 0 && u % 5 === 0) {
    console.log('FizzBuzz');
  } else if(u % 3 === 0) {
    console.log('Fizz');
  } else if(u % 5 === 0) {
    console.log('Buzz')
  } else{
    console.log(u)
  }
  u++;
}



// Exercise 11w

/*function findIndex(array, word) {
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] === word) {
      result = i;
      break
    } else {
      result = -1;
    }
  }
  return result;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));
*/
