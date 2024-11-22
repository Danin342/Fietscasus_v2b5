import { LitElement, html, css } from "lit";

class FormComponent extends LitElement {
    static styles = [
        css`
        :host {
            position: relative;
            display: block;

            width: 80vw;
            left: 10vw;
            top: 5vh;
        }

        form {
            width: 80vw;
        }

        h1 {
            margin: 0;
        }
        `
    ]

    render() {
        return html`
        <form>
            <h1>Reparatie formulier</h1>
        </form>
        `
    }
}

customElements.define("form-component", FormComponent)