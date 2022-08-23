function cambiarEstilo(){
  // Cambia los colores de la clase titulo y la clase cuerpo a colores aleatorios
  var titulos = document.getElementsByClassName('titulo');
  var cuerpos = document.getElementsByClassName('cuerpo');
  for (var i = 0; i < titulos.length; i++) {
    titulos[i].style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  for (var i = 0; i < cuerpos.length; i++) {
    cuerpos[i].style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}

function agregarArticulo(){
  var random = Math.floor(Math.random() * 100);
  var container = document.getElementsByClassName('container')[0];
  var nuevoArticulo = document.createElement('article');
  var titulo = document.createElement('h1');
  titulo.class = "titulo";
  var parrafo = document.createElement('p');
  parrafo.class = "cuerpo";
  var textoTitulo = document.createTextNode('Este es un nuevo articulo ' + random);
  var textoParrafo = document.createTextNode('Parrafo ' + random);
  nuevoArticulo.appendChild(titulo);
  nuevoArticulo.appendChild(parrafo);
  titulo.appendChild(textoTitulo);
  parrafo.appendChild(textoParrafo);
  container.appendChild(nuevoArticulo);
  
}

function eliminarArticulo(){
  var container = document.getElementsByClassName('container')[0];
  var ultimoArticulo = container.lastChild;
  container.removeChild(ultimoArticulo);
}