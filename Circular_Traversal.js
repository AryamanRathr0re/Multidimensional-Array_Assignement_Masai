let arr = [
    [1, 2, 3],
    [4, 5, 5],
    [7, 8, 9]
  ];
  
  console.log(arr[0][0]);
  
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i][0]);
  }
  
  for (let i = 1; i < arr[0].length; i++) {
    console.log(arr[0][i]);
  }
  
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i][arr[0].length - 1]);
  }
  
  for (let i = arr[0].length - 2; i >= 1; i--) {
    console.log(arr[arr.length - 1][i]);
  }
  
  
      
      