const input = document.getElementById("texc")
const button = document.getElementById("bot")
const contenedor = document.getElementById("elementos")
const resultado = document.getElementById("result")

const arreglo = ["Juan", "Andres", "Felipe", "Carlos", "Jose", "Rodolfo", "Alfredo"]

function actualizar(){

    let resultHTML =""
    
for(let i = 0; i < arreglo.length; i++){

    resultHTML += "<span>" + arreglo[i] + "</span>" 

}
contenedor.innerHTML = resultHTML


}

actualizar()

function resu(){

    const result = arreglo.indexOf(input.value)
    console.log(result)
    resultado.innerHTML = result


}

function color(){

    document.body.classList.toggle("opaco")

}