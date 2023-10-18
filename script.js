//criando funcao
function toggleMode(){
    
    //acessando html via document.Element
    const html = document.documentElement;

    //quando clicado o botao ira mudar o tema
    html.classList.toggle('light');
}