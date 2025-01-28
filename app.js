
//FUNCIONES BLOQUE
function agregarAmigo(){
    //CONTROL DE ERRORES: Verificar que la entrada del usuario no este vacia o tenga solo espacios
    if (document.querySelector('input').value.trim() ===  '') {
        alert("Debe de escribir un nombre");
    } 
    else {
    //PROCESO: Colocamiento de los nombres dentro del arreglo amigos.
        amigos.push(document.querySelector('input'));
        document.querySelector('input').value= '';
    }
} 

function sortearAmigo(){

}

//MAIN BLOQUE
    //VARIABLES BLOQUE 
let amigos = [];

    //PROCESO BLOQUE    