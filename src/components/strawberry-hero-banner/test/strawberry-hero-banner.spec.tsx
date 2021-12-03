import { newSpecPage } from '@stencil/core/testing';
import { StrawberryHeroBanner } from '../strawberry-hero-banner';

describe('strawberry-hero-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StrawberryHeroBanner],
      html: `<strawberry-hero-banner></strawberry-hero-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <strawberry-hero-banner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </strawberry-hero-banner>
    `);
  });
});
