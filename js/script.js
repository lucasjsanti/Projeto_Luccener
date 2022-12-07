  //Note que estamos passando um parâmetro para a função, será a própria tag <img> clicada
  function clique(img){
    //Primeiramente vamos relacionar os elementos com as variáveis
    //<div> principal com id "janelaModal".
    var modal=document.getElementById("janelaModal");
    //tag <img> que irá receber a imagem clicada.
    var modalImg=document.getElementById("imgModal");
    //<div> que recebe o texto relacionado com a imagem, o texto está no alt de cada imagem
    var captionTexto=document.getElementById("txtImg");
    //tag <span> que contém a letra "x" que será usada para fechar a janela modal
    var btFechar=document.getElementsByClassName("fechar")[0];

    //Configura <div> em "block" para que fique visível, inicialmente no CSS este display é none
    modal.style.display="block";
    //Capturamos o src da imagem clicada e passamos a tag <img> que tem id="imgModal"
    modalImg.src=img.src;
    //Capturamos o alt da imagem clicada e passamos a tag <img> que tem id="imgModal"
    modalImg.alt=img.alt;
    //Inserimos o texto do parâmetro alt da imagem dentro do <span> com id="txtImg"
    captionTexto.innerHTML=img.alt;

    //Adicionamos uma função do evento onclick do <span> que usa a classe CSS "fechar"
    btFechar.onclick=function(close){
          //Para fechar a janela modal simplesmente configuramos seu display como none.
          modal.style.display="none";
    }
}
