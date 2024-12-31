

let m = [
    [1, 2],
    [3, 4],
    [5, 6]
]

for (let i = 0; i < m.length; i++) {
    let ans = ""
    for (let j = 0; j < m[i].length; j++) {
        ans += i + j + " "
    }
    console.log(ans)

}


//Output:

// 0 1
// 1 2
// 2 3 