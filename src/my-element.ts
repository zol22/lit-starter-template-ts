import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {Todo} from './interface';
import '@vaadin/checkbox';
import '@vaadin/button';
import '@vaadin/text-field';
import '@vaadin/radio-group';
import '@vaadin/radio-group/vaadin-radio-button';

@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css`
    :host {
      display: block;
      max-width: 800px;
      margin: 0 auto;
    }
  `;

  @property({type: Array})
  todos: Todo[]; // this dont initialize , just declare

  @property({type: String})
  filter: string;

  @property({type: String})
  task: string;

  override render() {
    return html` <h1>Hi</h1> `;
  }
}
