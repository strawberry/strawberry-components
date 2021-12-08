import { Component, Host, h, Element, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
  tag: 'sc-add-to-cart',
  styleUrl: 'sc-add-to-cart.css',
  shadow: true,
})
export class ScAddToCart {
  @Element() el: HTMLElement;



  @Prop() productId: number;

  @Prop() buttonText: string = 'Add to Cart';

  @Prop() quantitySelector: boolean = false;

  @State() quantity: number = 1;

  @Event({
    eventName: 'sc:add-to-cart:emitted',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) scAddToCartEmiitted: EventEmitter;

  componentDidLoad() {

  }

  handleButton(event) {

    if(this.quantitySelector) {
      const selector = document.querySelector('sc-quantity-selector');
      this.quantity = Number(selector.dataset.quantity);
    }

    if(!event.defaultPrevented && this.productId) {
      this.scAddToCartEmiitted.emit({
        productId: this.productId,
        quantity: this.quantity
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
