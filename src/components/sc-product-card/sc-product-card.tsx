import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sc-product-card',
  styleUrl: 'sc-product-card.css',
  shadow: true,
})
export class ScProductCard {
  @Element() el: HTMLElement;

  @Prop() price: string;
  @Prop() productTitle: string;
  @Prop() url: string;

  render() {
    return (
      <Host>
        <a href={this.url}>
          <div class="container">
            <slot name="image"></slot>
            <h2>{this.productTitle}</h2>

            <span>{this.price}</span>
          </div>
        </a>
      </Host>
    );
  }
}
