function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    //if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
     // img.setAttribute("src", "./NFT02.png")
  //  } else {
      // set tiver sem light mode, manter a imagem normal
   //   img.setAttribute("src", "./NFT01.png")
   // }
  }
