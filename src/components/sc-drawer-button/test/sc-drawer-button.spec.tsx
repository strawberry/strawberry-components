import { newSpecPage } from '@stencil/core/testing';
import { ScDrawerButton } from '../sc-drawer-button';

describe('sc-drawer-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScDrawerButton],
      html: `<sc-drawer-button></sc-drawer-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sc-drawer-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sc-drawer-button>
    `);
  });
});
