//Quando temos uma funcao que ira chamar uma segunda funcao que sera executada somente quando a primeira for executada.

function a( callback ) {
    setTimeout(function(){
        console.log("a vem primeiro");
        callback();
    }, 3000);
}

function b() {
    console.log('b vem depois');
}

a( b );