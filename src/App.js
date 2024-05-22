import "./App.css";

function App() {
  function selectionSort(arr) {
    // 1. Divide the array in two parts
    // 2. one is sorted array with an index sortedArrayIndex
    // 3. another is unsorted index with length = arr.length-2
    // const sortedArray=arr[0]
    // const unsortedArray = arr[1] till the length of the array -2
    // [2,3]
    // length = 4
    // arr[0] = 2
    // arr[1] = 3
    // arr[2] = 5
    // arr = [5,11,9,6]
    console.log("Input array", arr);
    let sortedArrayIndex;
    if (arr.length > 0) {
      console.log("length", arr.length);
      for (
        sortedArrayIndex = 0;
        sortedArrayIndex <= arr.length - 2;
        sortedArrayIndex++
      ) {
        console.log("inside 1st for loop", arr[sortedArrayIndex]);
        for (
          let unsortedArrayIndex = sortedArrayIndex + 1;
          unsortedArrayIndex <= arr.length - 1;
          unsortedArrayIndex++
        ) {
          console.log("inside second for loop", arr[unsortedArrayIndex]);
          if (arr[sortedArrayIndex] > arr[unsortedArrayIndex]) {
            console.log("swap should happen");
            // swap using extra variable
            const containerTemp = arr[unsortedArrayIndex];
            arr[unsortedArrayIndex] = arr[sortedArrayIndex];
            arr[sortedArrayIndex] = containerTemp;
            console.log("after swap", arr);
          }
        }
      }
    }
    console.log("final array", arr);
    return arr;
  }
  selectionSort([20, 10]);
  return <div></div>;
}

export default App;
