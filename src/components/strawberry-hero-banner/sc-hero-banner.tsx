import { Component, Prop, h, Element, Host } from '@stencil/core';

@Component({
  tag: 'sc-hero-banner',
  styleUrl: 'sc-hero-banner.css',
  shadow: true,
})
export class SCHeroBanner {
  @Element() el: HTMLElement;
  /**
   * Hero text.
   */
  @Prop() text: string;

  /**
   * Vertical position.
   */
  @Prop() verticalPosition: string = 'top';

  /**
   * Horizontal position.
   */
  @Prop() horizontalPosition: string = 'left';

  /**
   * Optional text colour.
   */
  @Prop() textColour?: string;

  /**
   * Optional background colour.
   */
  @Prop() backgroundColour?: string;

  /**
   * Optional font size..
   */
  @Prop() fontSize?: string;

  /**
   * Optional Heading level.
   */
  @Prop() headingLevel?: number;

  /**
   * Optional Spacing.
   */
  @Prop() spacing?: string;

  /**
   * Optional text align.
   */
  @Prop() textAlign?: string = 'left';

  properties = {
    justify: '--sc-hero-banner-justify',
    align: '--sc-hero-banner-align',
    colour: '--sc-hero-banner-colour',
    background: '--sc-hero-banner-background',
    fontSize: '--sc-hero-banner-font-size',
    spacing: '--sc-hero-banner-spacing',
    textAlign: '--sc-hero-banner-text-align'
  }

  flexProperties = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end'
  }

  positionValue = {
    top: 'top',
    middle: 'middle',
    bottom: 'bottom',
    left: 'left',
    right: 'right'
  }

  private setPosition(prop, cssProperty, alignment: string[]) {
    switch (prop) {
      case alignment[0]:
        this.el.style.setProperty(cssProperty, this.flexProperties.start);
        break;
      case alignment[1]:
        this.el.style.setProperty(cssProperty, this.flexProperties.center);
        break;
      case alignment[2]:
        this.el.style.setProperty(cssProperty, this.flexProperties.end);
        break;
    }
  }

  private setBaseStyle() {
    const styleProps = [this.textColour, this.backgroundColour, this.fontSize, this.spacing, this.textAlign];

    styleProps.forEach(property => {
      if(!property) {
        return;
      }

      switch(property) {
        case this.textColour:
          this.el.style.setProperty(this.properties.colour, property);
        break;

        case this.backgroundColour:
          this.el.style.setProperty(this.properties.background, property);
        break;

        case this.fontSize:
          this.el.style.setProperty(this.properties.fontSize, `${property}rem`);
        break;

        case this.spacing:
          this.el.style.setProperty(this.properties.spacing, `${property}rem`);
        break;

        case this.textAlign:
          this.el.style.setProperty(this.properties.textAlign, property);
        break;
      }
    })
  }

  private setHeadingLevel() {
    if(!this.text) {
      return
    }

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
        return <h1 class="content">{this.text}</h1>
    }
  }

  connectedCallback() {
    this.setPosition(
      this.verticalPosition,
      this.properties.align,
      [this.positionValue.top, this.positionValue.middle, this.positionValue.bottom]
    );

    this.setPosition(
      this.horizontalPosition,
      this.properties.justify,
      [this.positionValue.left, this.positionValue.middle, this.positionValue.right]
    );

    this.setBaseStyle();
  }

  render() {
    return (
      <Host>
        <div class="container">
          {this.setHeadingLevel()}
          <slot></slot>
        </div>
      </Host>
    );
  }
}
