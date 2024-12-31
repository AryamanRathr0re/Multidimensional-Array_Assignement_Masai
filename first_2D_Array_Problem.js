// we can take the user input using prompt in the web browser 
// let M = 3
// let N = 3

//for now lets tale input in the code it self only

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


for (let i = 0; i < matrix.length; i++) {
    let ans = ""
    for (let j = 0; j < matrix[i].length; j++) {
        ans += matrix[i][j]
    }
    console.log(ans)
}


// Output:

//  1 2 3
//  4 5 6
//  7 8 9