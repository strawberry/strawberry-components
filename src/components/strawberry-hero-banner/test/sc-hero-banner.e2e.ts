import { newE2EPage } from '@stencil/core/testing';

describe('strawberry-hero-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sc-hero-banner></sc-hero-banner>');

    const element = await page.find('sc-hero-banner');
    expect(element).toHaveClass('hydrated');
  });
});
