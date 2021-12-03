import { Component, Prop, h, Element, Host } from '@stencil/core';

@Component({
  tag: 'strawberry-hero-banner',
  styleUrl: 'strawberry-hero-banner.css',
  shadow: true,
})
export class StrawberryHeroBanner {
  @Element() el: HTMLElement;
  /**
   * Image src.
   */
  @Prop() image: string;

  /**
   * Image Alt Text.
   */
  @Prop() imageAlt: string;

  /**
   * Hero text.
   */
  @Prop() text: string;

  @Prop() vertical_position: string;

  render() {
    // switch(this.verticalPosition) {
    //   case 'top':
    //     this.el.style.setProperty(`--strawberry-align`, 'flex-start');
    //     break;
    //   case 'bottom':
    //     this.el.style.setProperty(`--strawberry-align`, 'flex-end');
    //     break;
    // }

    if(this.vertical_position === 'top') {
      this.el.style.setProperty(`--strawberry-align`, 'flex-start');
    }

    console.log(this.el);

    return (
      <Host>
        <div class="container">
          <img src={this.image} alt="" />
          <p>{this.text}</p>
        </div>
      </Host>
    );
  }

}
