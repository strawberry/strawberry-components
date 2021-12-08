import { newSpecPage } from '@stencil/core/testing';
import { ScQuantitySelector } from '../sc-quantity-selector';

describe('sc-quantity-selector', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScQuantitySelector],
      html: `<sc-quantity-selector></sc-quantity-selector>`,
    });
    expect(page.root).toEqualHtml(`
      <sc-quantity-selector>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sc-quantity-selector>
    `);
  });
});
