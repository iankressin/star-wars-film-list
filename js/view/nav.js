import {LitElement, html, css} from 'lit-element';

class NavBar extends LitElement {
    static get styles(){
        return css `

            nav{
                background-color: transparent;
                border-bottom: 1px solid #dddddd;
                height: 90px;
                width: 100%;
                padding-top: 20px;
                text-align: center;
            }

            .wrapper{
                display: inline-flex;
            }

            img{
                margin-top: 10px;
                height: 60px;
                width: 60px;
                display: inline-flex;
            }

            #star{
                display: inline-flex;
                font-family: 'Roboto Slab', serif;
            }

            #film{
                display: inline-flex;
                font-family: 'Montserrat', sans-serif;
            }
        `;
    }

    render(){
        return html`
            <nav>
                <div class="wrapper">
                    <h2 id="star">Star Wars </h2>
                    <img src='../assets/img/trooper.png'/>
                    <h2 id="film">Film List</h2>
                </div>  
            </nav>
        ` ;
    }
}

customElements.define('nav-bar', NavBar)   ;