import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'sc-quantity-selector',
  styleUrl: 'sc-quantity-selector.css',
  shadow: true,
})
export class ScQuantitySelector {

  maxArray;
  select: HTMLSelectElement;

  @Prop() type: string;

  @Prop() maximum: number;

  @Prop() label: string = 'Quantity Selector';

  @State() quantity: number = 1;

  handleSelectUpdate () {
    this.quantity = Number(this.select.value);
  }

  handleQuantityPlus() {
    if(this.quantity !== this.maximum) {
      this.quantity ++;
    }
  }

  handleQuantityMinus() {
    if(this.quantity !== 1) {
      this.quantity --;
    }
  }

  connectedCallback() {
    this.maxArray = Array.from(Array(this.maximum), (x = 1, index) => index = index + x);
  }

  render() {
    return (
      this.type === 'select' ? (
        <Host data-quantity={this.quantity}>
          <label>{this.label}</label>

          <select
            onChange={() => this.handleSelectUpdate()}
            ref={(elementRef) => this.select = elementRef as HTMLSelectElement}
            >
            {this.maxArray.map((index) => (

              <option>{index}</option>
            ))}
          </select>
        </Host>
      ) :
      (
      <Host data-quantity={this.quantity}>
        <div class="container">
          <button class="button" part="button" onClick={() => this.handleQuantityPlus()}>+</button>
            <span class="quantity">{this.quantity}</span>
          <button class="button" part="button" onClick={() => this.handleQuantityMinus()}>-</button>
        </div>
      </Host>
      )
    );
  }

}
