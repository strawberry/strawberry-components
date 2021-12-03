import { newE2EPage } from '@stencil/core/testing';

describe('strawberry-hero-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<strawberry-hero-banner></strawberry-hero-banner>');

    const element = await page.find('strawberry-hero-banner');
    expect(element).toHaveClass('hydrated');
  });
});
