window.addEventListener('load', () => {

    //gerando o titulo do site
    const h1 = document.createElement('h1');
    h1.classList.add('titulo-pagina');
    h1.setAttribute('id','titulo');
    h1.setAttribute('data-test','title-test');
    h1.innerHTML = 'pagina dinamica';
    h1.style.color = 'red';

    //gerando o subtitulo do site
    const h2 = document.createElement('h2');
    h2.classList.add('sub-titulo');
    h2.setAttribute('data-test','subtitle-test');
    h2.innerHTML = 'subtitulo dinamico';

    const p1 = document.createElement('p');
})