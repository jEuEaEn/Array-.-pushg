
const contenedor = document.getElementById("elementos")

const lista = [ "Juan","Pera","Manzana","Caramelo","Chocolate","Hola","arequipe","arepa"]

function actualizar(){

    let resultHTML =""

    lista.forEach((elemento, index) =>{

        resultHTML += `<span id="forEach${index}">${elemento}</span>`

    })
    contenedor.innerHTML = resultHTML

}

lista.forEach((value, index) => {

    console.log("valor " + value)
    console.log("valor " + index)
    console.log("")

})

actualizar()

function boton(){

    lista.forEach((value,index) => {

      const element = document.getElementById(`forEach${index}`)

    setTimeout(() => {

        element.classList.add("selected")

    }, 300 * index)
    setTimeout(() => {

        element.classList.remove("selected")

    }, 300 * (index + 1))

    })
     
}

const ForEachBt = document.getElementById("Each")
ForEachBt.addEventListener("click", boton)