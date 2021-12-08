import { newSpecPage } from '@stencil/core/testing';
import { ScProductCard } from '../sc-product-card';

describe('sc-product-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScProductCard],
      html: `<sc-product-card></sc-product-card>`,
    });
    expect(page.root).toEqualHtml(`
      <sc-product-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sc-product-card>
    `);
  });
});
