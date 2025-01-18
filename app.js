// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []
function AddFriends(name){
    nombres.push(name)
    return nombres
}

function chooseFriend(){
    let random = Math.floor(Math.random() * nombres.length)
    return nombres[random]
}

function PintarAmigos(){
    let amigos = document.getElementById("listaAmigos")
    amigos.innerHTML = ""
    for(let i=0; i<nombres.length; i++){
        amigos.innerHTML += `<li>${nombres[i]}</li>`
    }
}



//Boton Añadir
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value
    if(nombre=="" || nombres.find(element => element == nombre)){
        alert("Ingrese un nombre u otro diferente")
        return
    }else{
        AddFriends(nombre)
        document.getElementById("amigo").value = ""
        PintarAmigos()
        console.log(nombres)
    }
}

//Boton Sortear
function sortearAmigo(){
    let amigo = chooseFriend()
    let ganador = document.getElementById("resultado")
    ganador.innerHTML = `<bf>El amigo a regalar es: ${amigo}</bf>`
}