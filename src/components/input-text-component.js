import { LitElement, html, css } from "lit";

export class InputTextComponent extends LitElement {
    static get properties() {
        return {
            label: { type: String },
            placeholder: { type: String },
            value: { type: String },
        };
    }

    static styles = [
        css`
            :host {
                display: block;
            }

            .labelContainer {
                display: flex;
                flex-direction: column;
            }

            input[type="text"] {
                padding: 10px;
                margin: 5px 0;
                border: 1px solid #b7b1b1;
                border-radius: 5px;
            }
        `,
    ];

    render() {
        return html`
            <div class="labelContainer">
                <label>${this.label}</label>
                <input type="text" placeholder=${this.placeholder} value=${this.value} />
            </div>
        `;
    }
}
customElements.define("input-text-component", InputTextComponent);
