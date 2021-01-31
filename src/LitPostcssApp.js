import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import styles from './LitPostcssApp.css';

export class LitPostcssApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css([styles]);
  }

  constructor() {
    super();
    this.title = 'My app using postcss!!!!';
  }

  render() {
    return html`
      <main>
        <div class="logo">${openWcLogo}</div>
        <h1>${this.title}</h1>

        <p>Edit <code>src/LitPostcssApp.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
