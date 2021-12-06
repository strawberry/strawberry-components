import { newSpecPage } from '@stencil/core/testing';
import { SCHeroBanner } from '../sc-hero-banner';

describe('strawberry-hero-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCHeroBanner],
      html: `<sc-hero-banner></sc-hero-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <sc-hero-banner>
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </sc-hero-banner>
    `);
  });
});
