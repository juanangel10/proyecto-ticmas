

let $botonMostrarDatos= document.getElementById("boton-mostrar-datos"),
    $botonOcultarDatos= document.getElementById("boton-ocultar-datos"),    
    $botonMostrarEstudios = document.getElementById("boton-mostrar-estudios"),
    $botonOcultarEstudios = document.getElementById("boton-ocultar-estudios"),
    $botonMostrarOtros = document.getElementById("boton-mostrar-otros"),
    $botonOcultarOtros = document.getElementById("boton-ocultar-otros"),
    $otrosEstudios = document.querySelectorAll('p');


$botonMostrarDatos.onclick = function(){
   document.getElementById("lista-datos").style.setProperty("display", "inline");
   $botonMostrarDatos.style.setProperty("display", "none");
   $botonOcultarDatos.style.setProperty("display", "inline");
}

$botonOcultarDatos.onclick = function(){
    document.getElementById("lista-datos").style.setProperty("display", "none");
    $botonOcultarDatos.style.setProperty("display", "none");
    $botonMostrarDatos.style.setProperty("display", "inline");
}


$botonMostrarEstudios.onclick = function(){
document.getElementById("lista-estudios").style.setProperty("display", "inline")
$botonMostrarEstudios.style.setProperty("display", "none");
$botonOcultarEstudios.style.setProperty("display", "inline");
}

$botonOcultarEstudios.onclick = function() {
    document.getElementById("lista-estudios").style.setProperty("display", "none")
    $botonOcultarEstudios.style.setProperty("display", "none");
    $botonMostrarEstudios.style.setProperty("display", "inline");
}


$botonMostrarOtros.onclick = function(){
    for  ( let i = 0; i < $otrosEstudios.length; i++) {
    $otrosEstudios[i].style.display="block"
    }
    $botonMostrarOtros.style.setProperty("display", "none");
    $botonOcultarOtros.style.setProperty("display", "inline");
    }  
    
    $botonOcultarOtros.onclick = function() {
        for  ( let i = 0; i < $otrosEstudios.length; i++) {
        $otrosEstudios[i].style.display="none";
        }
        $botonOcultarOtros.style.setProperty("display", "none");
        $botonMostrarOtros.style.setProperty("display", "inline");
    }
    
