const promise = new Promise((resolve, reject) => {
    for (var n = 10; n >0; n--) {
        console.log(n)
    }
})

promise.then(cBack());

function cBack() {
    console.log("feliz ano novo")
}
