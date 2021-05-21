const checkYuGiOh = n => {
    for (let i = 1; i <= n; i++) {
        if (i % 30 === 0) {
            console.log('yu-gi-oh')
        }
        else if (i % 6 === 0) {
            console.log('yu-oh')
        }
        else if (i % 15 === 0) {
            console.log('gi-oh')
        }
        else if (i % 10 === 0) {
            console.log('yu-oh')
        }
        else if (i % 2 === 0) {
            console.log('yu')
        }
        else if (i % 3 === 0) {
            console.log('gi')
        }
        else if (i % 5 === 0) {
            console.log('oh')
        }
        else {
            console.log(i)
        }
    }
    return n
}
checkYuGiOh(10)