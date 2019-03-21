import {LitElement, html, css} from '../../node_modules/lit-element/lit-element';

class FilmInfo extends LitElement {

    static get properties(){
        return {
            title: { type: String },
            releaseDate: { type: String },
            episodeId: { type: Number }
        };
    }

    constructor(){
        super();
        this.title = "";
        this.releaseDate = "";
        this.episodeId = 0;
    }

    static get styles(){
        return css `

            :host{
                display:inline-flex;
                margin-top:5px;
            }

            .info{
                display: inline-flex;
            }

            p {
                font-family: 'Montserrat', sans-serif;
            }

            h3{
                font-family: 'Roboto Slab', serif;

            }

            .wrapper:hover{
                background-color: #9b0d0d;
                box-shadow: 0px 10px 10px 0px #9b0d0d;
            }

            .wrapper{
                width: 130px;
                height: 250px;
                padding: 2px 20px 10px 20px;
                margin-right: 10px;
                background-color: #efefef;
                text-align: center;
                cursor: pointer;
                -webkit-transition: width 1s;
                transition: all 0.1s;
            }
        `;
    }

    render(){
        return html`
            <div class="wrapper">
                <h3>${this.title}</h3>
                <p>Release Date: ${this.releaseDate}</p>
                <p>Episode Id: ${this.episodeId}</p>
            </div>
        `;
    }
}

customElements.define('film-info', FilmInfo);
