// Given amatrixwith N rows and M columns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

// Approach or Intuition for the qeustion

//  00  01  02  03
//  10  11  12  13
//  20  21  22  23
//  30  31  32  33

//here we have the print the zigzag pattern a s we can see here that  ith row when even we satrt j from the last and when the ith row is odd we start the j from the starting
//we can take the input from user the prompt function 

let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [3, 2, 5, 4, 6],
    [7, 8, 9, 1, 2]
]

let ans = " "
for (let i = 0; i < arr.length; i++) {


    if (i % 2 === 0) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            ans += arr[i][j] + " "
        }
    }
    else {
        for (let j = 0; j < arr[i].length; j++) {
            ans += arr[i][j] + " "
        }

    }

}
console.log(ans)