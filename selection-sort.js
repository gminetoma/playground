"use strict";

const selectionSort = (array) => {
  //Freeze the input (no mutations)
  Object.freeze(array);

  //Create an out variable and assign the input values to it
  const out = [...array];

  //Loop the array / current index is the current item to swap
  for (let currentIndex = 0; currentIndex < out.length; currentIndex++) {
    //Set the starting value for the smallest item
    let smallestItemIndex = currentIndex;

    //Loop through the unsorted part of the array
    for (
      let currentUnsortedIndex = currentIndex + 1;
      currentUnsortedIndex < out.length;
      currentUnsortedIndex++
    ) {
      //Check the current unsorted value / if we have a new smallest value we update our variable
      if (out[smallestItemIndex] > out[currentUnsortedIndex]) {
        smallestItemIndex = currentUnsortedIndex;
      }
    }

    //If we have a new smallest item: Swap.
    if (currentIndex !== smallestItemIndex) {
      //Swap the values using the indexes
      [out[currentIndex], out[smallestItemIndex]] = [
        out[smallestItemIndex],
        out[currentIndex],
      ];
    }
  }
  return out;
};

const arrayTest = [5, 3, 8, 2, 4];
const result = selectionSort(arrayTest);
console.log(result);
