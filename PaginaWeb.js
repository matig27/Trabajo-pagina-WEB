let contenedorcartas = document.getElementById('cartas');
let cartasHTML = "";
for (let iphone in iphones){
    cartasHTML += crearcarta(iphone);
}
contenedorcartas.innerHTML = cartasHTML;

function crearcarta(iphone){
    let carta = document.createElement('div');
    carta.classList.add('carta');
    let id = document.createElement('div');
    let name = document.createElement('p');
    let espacio = document.createElement('br');
    let image = document.createElement('img');
    let type = document.createElement('p');

    id.innerText = iphones[iphone].id;
    name.innerText = iphones[iphone].name;
    image.src = iphones[iphone].image;
    type.innerText = iphones[iphone].type;

    carta.append(id, name, espacio, image, type);

    return carta.outerHTML;
}