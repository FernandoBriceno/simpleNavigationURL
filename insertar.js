//alert("funciona");
function mostrarContenido(archivoRuta){
    var archivoHTML = new XMLHttpRequest();
    archivoHTML.open("GET", archivoRuta,false);
    archivoHTML.send(null);
    return archivoHTML.responseText;
}

ruta = location.search.slice(1);
//if (ruta.length==0)


if (ruta.length!=0){
    var contenidoHTML = mostrarContenido('./'+ruta+'.html');  
}
else{
    var contenidoHTML = 'No hay contenido par amostrar';
}


class Contenido extends HTMLElement{
    constructor(){
        super();
        this.innerHTML= contenidoHTML;
    }
}
customElements.define('contenido-component', Contenido);

class menu extends HTMLElement{
    constructor(){
        super();
        this.innerHTML= mostrarContenido('./views/components/menu.html');  ;
    }
}
customElements.define('menu-component', menu);



var numAleat =Math.floor(Math.random() * 10000);
class ContenidoAleatorio extends HTMLElement{
    constructor(){
        super();
        this.innerHTML= '<label hidden>ContenidoOculto'+numAleat+'</label>';
    }
}
customElements.define('contenido-aleatorio', ContenidoAleatorio);
/*
addEventListener('load', (event) => {});

onload = (event) => { };*/