import { newSpecPage } from '@stencil/core/testing';
import { ScAddToCart } from '../sc-add-to-cart';

describe('sc-add-to-cart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScAddToCart],
      html: `<sc-add-to-cart></sc-add-to-cart>`,
    });
    expect(page.root).toEqualHtml(`
      <sc-add-to-cart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sc-add-to-cart>
    `);
  });
});
