async function oneToTen(callback) {
    for (var n = 10; n >0; n--) {
        console.log(n)
    }
    await cBack();
}

function cBack() {
    console.log("feliz ano novo")
}

oneToTen();