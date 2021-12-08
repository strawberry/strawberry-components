import { newE2EPage } from '@stencil/core/testing';

describe('sc-quantity-selector', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sc-quantity-selector></sc-quantity-selector>');

    const element = await page.find('sc-quantity-selector');
    expect(element).toHaveClass('hydrated');
  });
});
