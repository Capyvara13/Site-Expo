document.addEventListener('DOMContentLoaded', function () {
    fetch('../navBar/navBarIndex.html')
        .then(response => response.text())
        .then(html => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            var div = doc.querySelector('#navBar');
            if (div) {
                document.querySelector('nav').appendChild(div);
                //Código do navBar
                //Variaveis para menu Mobile
                let menuButton = document.getElementById("mobileMenuButton");
                let menuBar1 = document.getElementById("bar1");
                let menuBar2 = document.getElementById("bar2");
                let menuBar3 = document.getElementById("bar3");
                //Código do menu
                
            } else {
                console.error('Elemento #IDdoElemento não encontrado no HTML carregado');
            }
        });

    console.log('Barra de navegação carregada com sucesso!');
});