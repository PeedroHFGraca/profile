function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light") // se caso o Toggle n existesse, seguiriamos a lógica abaixo: 

    /*if(html.classList.contains('light')) {  //Se na lista de classe Liste contem 'light'
        html.classList.remove('light')
    }
    else{
        html.classList.add('light')
    }
    */

    // selecionar a tag IMG
    const img = document.querySelector("#profile img")
    
    // substituir a img
    if(html.classList.contains('light')){
        // se tiver no light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png') // trocar a imagem que está no src(source) para o local da img light
        img.setAttribute('title', 'avatar-light')// trocar o title da img
    }
    else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('title', 'avatar')
    }
    
}