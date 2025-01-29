//VARIABLES GLOBALES BLOQUE
let amigos = [];
let lista;
let amigoElegido;
//FUNCIONES BLOQUE
function agregarAmigo(){
    //CONTROL DE ERRORES: Verificar que la entrada del usuario no este vacia o tenga solo espacios
    if (document.querySelector('input').value.trim() ===  '') {
        alert("Debe de escribir un nombre");
    } 
    else {
    //PROCESO: Colocamiento de los nombres dentro del arreglo amigos.
        amigos.push(document.querySelector('input').value);
        document.querySelector('input').value= '';
        mostrarAmigos();
    }
} 
function mostrarAmigos(){
    //Función para actualizar y mostrar la lista de amigos 
    lista = document.querySelector('#listaAmigos'); 
    lista.innerHTML = ""; //Limpia la lista antes de añadir nuevos amigos
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}
function sortearAmigo(){
    //CONTROL DE ERRORES:
    if (amigos.length == 0) {
        alert('Cuentas con muy pocos amigos. :(\n¡Consigue mas y escibelos! :D');
    } else {
        let indiceElegido = Math.floor(Math.random() * amigos.length);//Elegir el indice del amigo que gano el sorteo sin importar la cantidad de amigos
        amigoElegido = document.getElementById('resultado');
        amigoElegido.innerHTML = `<p>Tu amigo secreto es: ${amigos[indiceElegido]}</p>`;
        amigos.splice(indiceElegido, 1);//Eliminar el nombre de la persona del arreglo para que no vuelva a aparecer
        mostrarAmigos();//mostrar la lista actualizada.
    }
}
function condicionesIniciales(){
    amigos = [];
    lista.innerHTML= "";
    amigoElegido.innerHTML = "";    
} 