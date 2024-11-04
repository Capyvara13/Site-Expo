document.addEventListener('DOMContentLoaded', function () {
    fetch('../navBar-footer/navBar-footerIndex.html')
        .then(response => response.text())
        .then(html => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            var div = doc.querySelector('#navBar');
            if (div) {
                document.querySelector('nav').appendChild(div);
                //Código do navBar
                //Variaveis para menu Mobile
                let menuButton = document.getElementById("burger");
                let menuBar1 = document.getElementById("bar1");
                let menuBar2 = document.getElementById("bar2");
                let menuBar3 = document.getElementById("bar3");
                let menuGUI = document.getElementById("menuButtons");
                //Código do menu

                let isMenuButtonClicked = false;
                function menuMobile() {
                    let larguradatela = screen.width;
                    isMenuButtonClicked = !isMenuButtonClicked;
                    menuBar2.classList.remove("animationBar2Out2");
                    menuBar2.classList.remove("animationBar2In2");
                    if (isMenuButtonClicked) {
                        //Animação do menu
                        menuBar1.classList.remove("animationBar1Out");
                        menuBar3.classList.remove("animationBar3Out");
                        menuBar1.classList.add("animationBar1In");
                        menuBar3.classList.add("animationBar3In");
                        menuBar2.classList.remove("animationBar2Out");
                        menuBar2.classList.add("animationBar2In");

                        menuBar2.style.width = "0vw";

                        menuBar3.style.top = "5.8vh";
                        menuBar3.style.transform = "rotate(45deg)";
                        menuBar1.style.top = "5.8vh";
                        menuBar1.style.transform = "rotate(-45deg)";
                        //--animação do menu--

                        //Guia de menu
                        menuGUI.style.top = "0";

                    } else {
                        //Animação do menu
                        menuBar1.classList.remove("animationBar1In");
                        menuBar3.classList.remove("animationBar3In");
                        menuBar1.classList.add("animationBar1Out");
                        menuBar3.classList.add("animationBar3Out");
                        menuBar2.classList.remove("animationBar2In");
                        menuBar2.classList.add("animationBar2Out");

                        menuBar2.style.width = "15vw";

                        menuBar3.style.top = "8vh";
                        menuBar3.style.transform = "rotate(0deg)";
                        menuBar1.style.top = "4vh";
                        menuBar1.style.transform = "rotate(0deg)";
                        //--animação do menu--

                        //Guia de menu
                        menuGUI.style.top = "-100vh";
                    }

                    if (larguradatela) {

                        if (larguradatela == 768) {
                            menuBar2.classList.remove("animationBar2In");
                            menuBar2.classList.remove("animationBar2Out");
                            if (isMenuButtonClicked) {
                                menuBar2.classList.remove("animationBar2Out2");
                                menuBar2.classList.add("animationBar2In2");

                                menuBar2.style.width = "0vw";
                            } else {
                                menuBar2.classList.remove("animationBar2In2");
                                menuBar2.classList.add("animationBar2Out2");

                                menuBar2.style.width = "10vw";
                            }
                        }
                    }
                };

                menuButton.addEventListener("click", menuMobile);
            } else {
                console.error('Elemento #IDdoElemento não encontrado no HTML carregado');
            }
        });

    console.log('Barra de navegação carregada com sucesso!');


    fetch('../navBar-footer/navBar-footerIndex.html')
        .then(response => response.text())
        .then(html => {
            const docfooter = new DOMParser().parseFromString(html, 'text/html');
            var div = docfooter.querySelector('#footerInserido');
            if (div) {
                document.querySelector('footer').appendChild(div);
            } else {
                console.error('Elemento #footerInserido não encontrado no HTML carregado');
            }
        });

    console.log('Footer carregada com sucesso!');

});