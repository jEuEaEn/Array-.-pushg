const input = document.getElementById("intt")
const contenedor = document.getElementById("elementos")
const buttonUnshift = document.getElementById("unshift")

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

function outElements(){

    if (input.value != ""){

        elementos.unshift(input.value)

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
