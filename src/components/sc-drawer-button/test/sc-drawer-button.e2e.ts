import { newE2EPage } from '@stencil/core/testing';

describe('sc-drawer-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sc-drawer-button></sc-drawer-button>');

    const element = await page.find('sc-drawer-button');
    expect(element).toHaveClass('hydrated');
  });
});
