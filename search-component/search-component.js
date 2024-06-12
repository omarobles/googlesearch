export default class SearchComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const microphone = '<img class="microphone" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1200px-Google_mic.svg.png">';
        const scan = '<img class="scan" src="search-component/camera.png">';
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <style>
            .divTexto{
                width: 561px;
                height: 44px;
                font-family: "Montserrat", sans-serif;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                background-color: white;
                border-radius: 25px;
                border: 1px solid lightgray;
                margin-top: 20px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
            input{
                font-family: "Montserrat", sans-serif;
                width: 561px;
                height: auto;
                border: none;
                font-weight: 600;
            }

            input:focus {
                outline: none;
            }

            .microphone{
                width: 15px;
                height: auto;
                margin-right: 15px;
            }

            .microphone:hover, .scan:hover{
                cursor: pointer;
            }

            .scan{
                width: 24px;
                height: auto;
                margin-right: 15px;
            }
            span{
                margin-left: 15px;
                margin-right: 15px;
            }
        </style>
        <div class="divTexto">
            <span class="material-symbols-outlined">
                search
            </span>
            <input type="text" placeholder="Search Google or type a URL">
            ${microphone}
            ${scan}
        </div>
        `;
    }
}