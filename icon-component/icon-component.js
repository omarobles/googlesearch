export default class IconComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.url = "";
    }

    connectedCallback() {
        this.render();
    }

    static observedAttributes = ['icon'];

    attributeChangedCallback(name, oldValue, newValue) {

        if (name === "icon") {
            this.text = newValue;
        }
        if (name === "texto") {
            this.text = newValue;
        }
    }

    render() {
        const url = this.getAttribute("icon");
        const texto = this.getAttribute("text");
        let icono = url.includes("https") ? `<img src="${url}">` : url;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            
        <style>
            .elemento{
                display: flex;
                width: 112px;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                font-family: "Montserrat", sans-serif;
                background-color: wheat
            }
            
            .circulo{
                width: 40px;
                height: 40px;
                background-color: lightgray;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                border: 1px solid wheat;
            }

            img{
                width: 20px;
                height: auto;
            }

          
            .material-symbols-outlined {
                color: black;
            }

            .texto{
                text-align: center;
                color: black;
                font-weight: 500;
                width: 112px;
                font-size: 13px;
            }
        </style>
        <div class="elemento">
            <div class="circulo">
                ${icono}
            </div>
            <p class = "texto">
                ${texto}
            </p>
        </div>
        `;
    }
}