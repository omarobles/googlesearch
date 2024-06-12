import IconComponent from "../icon-component/icon-component.js";
import SearchComponent from "../search-component/search-component.js";
import HeaderComponent from "../header-component/header-component.js";
export default class MainComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.urlIconos = [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png",
            "https://cdn-icons-png.flaticon.com/512/25/25231.png",
            "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
            "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
            "https://cdn.worldvectorlogo.com/logos/lit-1.svg",
            "https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/860px-Google_Drive_icon_%282020%29.svg.png",
            "https://web-components-resources.appspot.com/static/logo.svg",
            "https://camo.githubusercontent.com/dfb7129b176d0f6559d3c67365d99ad2a510d2eab5afdd28612e163344f35f79/68747470733a2f2f646f63732e636f6465776172732e636f6d2f6c6f676f2e737667",
            `<span class='material-symbols-outlined'>add</span>`];
        this.textoIcono = ["Carrito de c...", "GitHub", "(420) YouTu...", "(2) Facebook", "Lit", "Web Compo...", "Google Drive", "webcompon...", "Codewars", "Add shortcut"];
        this.busqueda = ["chatgpt", "cómo declarar una variable en javascript", "Google", "YouTube", "Cómo aprender javascript en 1 día"];
        this.resultBusqueda = [];
        this.mensajeModal = "";
    }

    connectedCallback() {
        this.render();
        const modal = this.shadowRoot.getElementById("modal");
        // window.onclick = (event) => {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //     }
        // };
        this.shadowRoot.querySelector("#salir").addEventListener("click", function () {
            modal.style.display = "none";
        });
    }


    addButtonListener() {
        const modal = this.shadowRoot.getElementById("modal");
        const searchComponent = this.shadowRoot.querySelector("search-component");
        const divTexto = searchComponent.shadowRoot.querySelector(".divTexto");
        const input = divTexto.querySelector("input");
        input.addEventListener("keyup", (event) => {
            if (event.key === "Enter" && input.value !== "") {
                this.resultBusqueda = this.busqueda.filter(texto => {
                    return texto.toLowerCase().includes(input.value.toLowerCase());
                });
                this.mensajeModal = this.resultBusqueda.map(elemento => {
                    return `<li>${elemento}</li>`
                }).join("");
                this.shadowRoot.querySelector("#result").innerHTML = this.mensajeModal !== "" ? this.mensajeModal : `<p>No se encontraron resultados</p>`;
                modal.style.display = "block";
                input.value = "";
            }
        });
    }

    render() {
        const componenteIcono = this.urlIconos.map((url, index) => {
            const texto = this.textoIcono[index];
            return `<icon-component icon="${url}" text="${texto}"></icon-component>`
        }).join("");
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <style>
            .imagen, .search, .container-icono{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 10px;
            }
            .iconos{
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-template-rows: repeat(2, 1fr);
                row-gap: 30px;
                column-gap: 15px;
                background-color: #fff;
                text-align: center;
                background-color: wheat
            }

            img{
                width: 272px;
                height: 92px;
            }

            .imagen{
                margin-top: 150px;
            }

            .container-icono{
                margin-top: 50px;
            }
            .modal {
                display: none;
                position: fixed;
                z-index: 1;
                padding-top: 300px;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgb(0, 0, 0);
                background-color: rgba(0, 0, 0, 0.4);
                -webkit-animation-name: fadeIn;
                -webkit-animation-duration: 0.4s;
                animation-name: fadeIn;
                animation-duration: 0.4s;
                font-family: "Montserrat", sans-serif;
            }


            .modal-content {
                background-color: #fefefe;
                margin: auto;
                padding: 20px;
                border: 1px solid #888;
                border-radius: 5px;
                width: 400px;
                -webkit-animation-name: slideIn;
                -webkit-animation-duration: 0.4s;
                animation-name: slideIn;
                animation-duration: 0.4s;
                text-align: center;
            }
            
            .circulo {
                background-color: #EAAF00;
                border-radius: 50%;
                height: 50px;
                width: 50px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                color: white;
            }

            #salir {
                width: 100%;
                height: 50px;
                font-size: 20px;
                font-weight: 500;
                background-color: #E2E6EA;
                color: black;
                border-radius: 5px;
                border: none;
                margin-top: 20px;
                font-family: "Montserrat", sans-serif;
            }

            #salir:hover{
                cursor: pointer;
                background-color: 
            }

            ul {
                list-style: none;
                padding: 0;
            }
        </style>
        <header>
            <header-component></header-component>
        </header>
        <main>
            <div class="imagen">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png">
            </div>
            <div class="search">  
                <search-component></search-component>
            </div>  
            <div class="container-icono">
                <div class='iconos'>
                    ${componenteIcono}
                </div>
            </div>
        </main>
        <div id="modal" class="modal">
            <div class="modal-content ubuntu-medium">
                <div class="circulo"><span class="material-symbols-outlined">
                        priority_high
                </span></div>
                <h2>Resultados</h2>
               <div id="result">
                     <ul>${this.mensajeModal}</ul>
               </div>
                <div>
                    <button id="salir" class="ubuntu-bold">Salir</button>
                </div>
            </div>
        </div>
        `;
        this.addButtonListener();
    }
}

customElements.define('header-component', HeaderComponent);
customElements.define('search-component', SearchComponent);
customElements.define('icon-component', IconComponent);