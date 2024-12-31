
let N = 5
let ans = []


for (let i = 0; i < N; i++) {
    let ans = ""

    if (i === 0 || i === N - 1) {
        for (let j = 0; j < N; j++) {
            ans += "*" + " "

        }


    }
    else {

        ans += "*"

    }

    console.log(ans)

}






