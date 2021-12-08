import { newE2EPage } from '@stencil/core/testing';

describe('sc-add-to-cart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sc-add-to-cart></sc-add-to-cart>');

    const element = await page.find('sc-add-to-cart');
    expect(element).toHaveClass('hydrated');
  });
});
