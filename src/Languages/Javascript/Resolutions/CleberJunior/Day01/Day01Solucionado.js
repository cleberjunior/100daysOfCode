let num1 = prompt('Digite um numero')
let num2 = prompt('Digite um numero')

function divisao(x, y) {
    if(num1 == 0 || num2 == 0) {
        return 'divisão impossivel'
    } else {
        return x / y
    }
}

console.log(divisao(num1, num2))
