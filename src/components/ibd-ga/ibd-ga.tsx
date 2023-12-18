import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ibd-ga',
  styleUrl: 'ibd-ga.css',
  shadow: true,
})
export class IbdGa {

  private h1Added = false;

  componentWillLoad() {
    if (!this.h1Added) {
      const h1 = document.createElement('h1');
      h1.className = 'example';
      h1.textContent = 'hola';
      document.body.appendChild(h1);
      this.h1Added = true;
    }





  }

  render() {
    return (
      <Host>
        <h1>Viva GA 1</h1>
        <slot></slot>
      </Host>
    );
  }

}
