import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sc-drawer-button',
  styleUrl: 'sc-drawer-button.css',
  shadow: true,
})
export class ScDrawerButton {
  @Element() el: HTMLElement;

  button: HTMLButtonElement;

  @Prop() drawerName: string;

  @Prop() buttonText: string = 'Open Drawer';

  @Event({
    eventName: 'sc:drawer:toggle',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) scDrawerToggle: EventEmitter;

  handleButton() {
    this.scDrawerToggle.emit({drawer: this.drawerName});
  }

  render() {
    return (
      <Host>
        <button
          onClick={() => this.handleButton()}
          ref={(elementRef => this.button = elementRef as HTMLButtonElement)}
          part="drawer-button"
        >
          {this.buttonText}
        </button>
      </Host>
    );
  }
}
