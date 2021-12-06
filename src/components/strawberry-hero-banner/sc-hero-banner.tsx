import { Component, Prop, h, Element, Host } from '@stencil/core';

@Component({
  tag: 'sc-hero-banner',
  styleUrl: 'sc-hero-banner.css',
  shadow: true,
})
export class SCHeroBanner {
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

  /**
   * Vertical position.
   */
  @Prop() verticalPosition: string;
  /**
   * Horizontal position.
   */
  @Prop() horizontalPosition: string;

  @Prop() textColour?: string;

  @Prop() backgroundColour?: string;

  @Prop() fontSize?: string;

  @Prop() headingLevel?: number;

  @Prop() spacing?: string;

  @Prop() padding?: string;

  private setPosition(prop, cssProperty, alignment: string[]) {
    switch (prop) {
      case alignment[0]:
        this.el.style.setProperty(cssProperty, 'flex-start');
        break;
      case alignment[1]:
        this.el.style.setProperty(cssProperty, 'center');
        break;
      case alignment[2]:
        this.el.style.setProperty(cssProperty, 'flex-end');
        break;
    }
  }

  private setBaseStyle() {
    const styleProps = [this.textColour, this.backgroundColour, this.fontSize, this.spacing];

    styleProps.forEach(property => {
      if(!property) {
        return;
      }

      switch(property) {
        case this.textColour:
          this.el.style.setProperty('--strawberry-colour', property);
        break;

        case this.backgroundColour:
          this.el.style.setProperty('--strawberry-background', property);
        break;

        case this.fontSize:
          this.el.style.setProperty('--strawberry-font-size', property);
        break;

        case this.spacing:
          this.el.style.setProperty('--strawberry-spacing', `${property}rem`);
        break;
      }
    })
  }

  private setHeadingLevel() {
    switch(this.headingLevel) {
      case 1:
        return <h1 class="content">{this.text}</h1>
      case 2:
        return <h2 class="content">{this.text}</h2>
      case 3:
        return <h3 class="content">{this.text}</h3>
      case 4:
        return <h4 class="content">{this.text}</h4>
      case 5:
        return <h5 class="content">{this.text}</h5>
      case 6:
        return <h6 class="content">{this.text}</h6>
      default:
        return <p class="content">{this.text}</p>
    }
  }

  connectedCallback() {
    this.setPosition(
      this.verticalPosition,
      '--strawberry-align',
      ['top', 'middle', 'bottom']
    );

    this.setPosition(
      this.horizontalPosition,
      `--strawberry-justify`,
      ['left', 'middle', 'right']
    );

    this.setBaseStyle();
  }

  render() {
    return (
      <Host>
        <div class="container">
        {this.setHeadingLevel()}
        </div>
      </Host>
    );
  }
}
