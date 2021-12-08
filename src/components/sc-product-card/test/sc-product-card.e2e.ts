import { newE2EPage } from '@stencil/core/testing';

describe('sc-product-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sc-product-card></sc-product-card>');

    const element = await page.find('sc-product-card');
    expect(element).toHaveClass('hydrated');
  });
});
