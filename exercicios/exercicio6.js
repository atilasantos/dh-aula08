function maiorQue7(array) {
    for (var numero in array) {
        if (array[numero] > 7) {
            console.log(array[numero], "e maior que 7!")
        }
    }
    }


maiorQue7([5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0])