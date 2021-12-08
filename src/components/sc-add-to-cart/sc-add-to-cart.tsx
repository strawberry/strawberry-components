import { Component, Host, h, Element, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'sc-add-to-cart',
  styleUrl: 'sc-add-to-cart.css',
  shadow: true,
})
export class ScAddToCart {
  @Element() el: HTMLElement;

  @Prop() productId: number;

  @Prop() buttonText: string = 'Add to Cart';

  @Event({
    eventName: 'sc:add-to-cart:emitted',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) scAddToCartEmiitted: EventEmitter;

  handleButton(event) {
    if(!event.defaultPrevented && this.productId) {
      this.scAddToCartEmiitted.emit({
        productId: this.productId,
        quantity: 1
      });
    }
  }

  render() {
    return (
      <Host>
        <button part="button" onClick={(event) => this.handleButton(event)}>{this.buttonText}</button>
      </Host>
    );
  }
}
