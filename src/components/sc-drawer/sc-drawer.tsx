import { Component, Host, h, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'sc-drawer',
  styleUrl: 'sc-drawer.css',
  shadow: true,
})
export class ScDrawer {

  @State() open: boolean = false;

  @Listen('drawer:toggle', { target: 'document' })
  toggleHandler(event) {
    const { drawer } = event.detail;

    if(drawer !== this.drawerName) {
      return
    }
    console.log(event);

    console.log(drawer, this.drawerName);
    this.open = !this.open;
  }

  @Prop() drawerName: string;

  render() {
    return (
      <Host>
         <div class="container">
           <p>{this.open ? "Open" : "Closed"}</p>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
