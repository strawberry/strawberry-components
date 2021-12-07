import { Component, Host, h, Listen, Prop, State, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'sc-drawer',
  styleUrl: 'sc-drawer.css',
  shadow: true,
})
export class ScDrawer {
  @Element() el: HTMLElement;

  button: HTMLButtonElement;

  properties = {
    width: '--sc-drawer-desktop-width',
    backgroundColour: '--sc-drawer-background',
    textColour: '--sc-drawer-colour',
  }

  @Prop() drawerName: string;

  @Prop() buttonText: string = 'Close';

  @Prop() textColour?: string;

  @Prop() backgroundColour?: string;

  @Prop() desktopWidth?: string;

  @State() open: boolean = false;

  @Listen('sc:drawer:toggle', { target: 'document' })
  toggleHandler(event) {
    const { drawer } = event.detail;

    if(drawer !== this.drawerName) {
      this.open = false;
      return
    }

    this.open = !this.open;
  }

  @Event({
    eventName: 'sc:drawer:toggle',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) scDrawerClosed: EventEmitter;

  handleButton() {
    this.scDrawerClosed.emit(this.drawerName);
  }

  private setBaseStyle() {
    const styleProps = [this.textColour, this.backgroundColour, this.desktopWidth];

    styleProps.forEach(property => {
      if(!property) {
        return;
      }

      switch(property) {
        case this.desktopWidth:
          this.el.style.setProperty(this.properties.width, `${property}%`);
        break;

        case this.backgroundColour:
          this.el.style.setProperty(this.properties.backgroundColour, `${property}`);
        break;

        case this.textColour:
          this.el.style.setProperty(this.properties.textColour, `${property}`);
        break;
      }
    })
  }

  connectedCallback() {
    this.setBaseStyle();
  }

  render() {
    return (
      <Host>
         <div class="container" data-state={this.open ? "open" : "closed"}>
          <button
            class="button"
            onClick={() => this.handleButton()}
            ref={(elementRef) => this.button = elementRef as HTMLButtonElement}>
              {this.buttonText}
          </button>

          <slot></slot>
        </div>
      </Host>
    );
  }
}
