const popButton = document.getElementById("pop")
const resetButton = document.getElementById("reset")

let arreglo = ["Manzana", "Pera", "Kiwi", "Mandarina", "Frutas", "Verduras", "Mesa", "Silla", "Platos"]

const contenedor = document.getElementById("elementos")
function actualizar(){

    let resultHTML =""
for(let i = 0; i < arreglo.length; i++){

    resultHTML += "<span>" + arreglo[i] + "</span>" 

}
contenedor.innerHTML = resultHTML


}


function miFuncionDePop(){

    arreglo.pop()
    console.log(arreglo)
    actualizar()

}

function miFuncionDeReseteo(){

    arreglo = ["Manzana", "Pera", "Kiwi", "Mandarina", "Frutas", "Verduras", "Mesa", "Silla", "Platos"]
    console.log(arreglo)
    actualizar()

}

actualizar()
popButton.addEventListener("click",miFuncionDePop)
resetButton.addEventListener("click",miFuncionDeReseteo)


/*
let elementos = []

function agregarElemento(){

    if (input.value != ""){

        elementos.push(input.value)

        let resultado = ""
        for( let i = 0; i < elementos.length; i++){

            resultado += "<span>" + elementos[i] +"</span>"

        }
        contenedor.innerHTML = resultado

    }
    
}

function resetElements(){

    elementos = []
    contenedor.innerHTML = ""

}
*/
