import {LitElement, html, css} from 'lit-element';

class TextInput extends LitElement {
    
    static get properties(){
        return {
            searchTerm: { type: String },
            searchResult: { type: Object }
        };        
    }

    constructor(){
        super();
        this.searchTerm = "";
        this.searchResults = {}; 
    }

    static get styles(){
        return css `

        `;
    }

    render(){
        return html`
            <div @keyup="${this.shortcutEvent}">
                <paper-input
                    always-float-label
                    value="${this.searchTerm}"
                    label="Search for film title"
                    @change="${this.updateSearchTerm}"
                ></paper-input>
            </div>

            <div id='search-result'>
                ${this.searchResult !== undefined ? html`${ this.searchResult.map( result => html`
                    <film-info title="${result.title}" releaseDate="${result.release_date}" episodeId="${result.episode_id}"></film-info>
                `)}` : ''}
            </div>
        `;
    }

    shortcutEvent(e){
        if(e.key === "Enter"){
            let request = new XMLHttpRequest();
            let searchQuery =  this.searchTerm.split(" ").join('+')
            let requestURL = 'https://swapi.co/api/films/?search=' + searchQuery;
            let films = {};
            
            request.open('GET', requestURL, true);
            request.responseType = 'json';
            request.send();
            request.onload = () => {
                films = request.response.results;
                this.searchResult = films;
                this.requestUpdate();
                console.log(this.searchResult);
            }
            this.searchTerm = '';
            location.hash = "#search-result";
        }
    }

    updateSearchTerm(e){
        this.searchTerm = e.target.value;
    }
}

customElements.define('text-input', TextInput);