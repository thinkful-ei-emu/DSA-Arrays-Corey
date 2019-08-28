const memoryInstance = require('./memory');

let Memory = new memoryInstance();

//1 Implement an Array class from scratch.

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }
  
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size){
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length>= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }  

}


function Main(){

  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(5);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // arr.pop();
  // arr.pop();
  // arr.pop();
  //arr.push('tauhida'); //NaN
  // console.log(arr.get(0));
  // console.log(arr);
}

Main();

/* ------------------------------------------------------------------------------------------------ */


/*
class myArray {
  constructor(){
    this.length = 0;
    this.ptr = Memory.allocate(this.length);
  }

  //ptr = pointer(memory position pointer)
  push(value) {
    this._resize(this.length + 1);
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  //So instead you have to allocate a new, larger chunk of memory, 
  //copy any existing values from the old to the new chunk, and free 
  //the old chunk. O(n)
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    Memory.copy(this.ptr, oldPtr. this.length);
    Memory.free(oldPtr);
  }

  //All this does is add an index offset, 
  //and get the value stored at a memory address. O(1)
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index);
  }

  //Rather than resize the array, you just leave an extra 
  //space which will be filled at the next push. O(1)
  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  //shift all of the values after the new value back one position. 
  //Then you put the new value in its correct place. O(n)
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length>= this._capacity) {
      this._resize((this.length + 1) * myArray.SIZE_RATIO); //myArray or Array?
    }
    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }

  //Copying the values backwards to fill the space where the 
  //values were removed rather than forwards to make space for a new value. O(n)
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }

}
*/

//A BETTER WAY \/

// class Array {
//   constructor() {
//       this.length = 0;
//       this._capacity = 0;
//       this.ptr = memory.allocate(this.length);
//   }

//   push(value) {
//       if (this.length >= this._capacity) {
//           this._resize((this.length + 1) * Array.SIZE_RATIO);
//       }

//       memory.set(this.ptr + this.length, value);
//       this.length++;
//   }

//   _resize(size) {
//       const oldPtr = this.ptr;
//       this.ptr = memory.allocate(size);
//       if (this.ptr === null) {
//           throw new Error('Out of memory');
//       }
//       memory.copy(this.ptr, oldPtr, this.length);
//       memory.free(oldPtr);
//       this._capacity = size;
//   }
// }
// Array.SIZE_RATIO = 3;