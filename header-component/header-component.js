export default class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <style>
            section{
                display: flex;
                justify-content: end;
                font-family: "Montserrat", sans-serif;
                padding: 10px
            }
            .iconos-der{
                display: flex;
                align-items: center;
            }

            .icono{
                margin-right: 20px;
            
                }
            .imagen-perfil{
                width: 30px;
                height: 30px;
                background-color: black;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
            }

        </style>
        <section>
            <div class="iconos-der">
                <span class="icono">
                    Gmail
                </span>
                <span class="material-symbols-outlined icono">
                    science
                </span>
                <span class="material-symbols-outlined icono">
                    apps
                </span>
                <div class="imagen-perfil">
                    O
                </div>
            </div>
        </section>
        `;
    }
}