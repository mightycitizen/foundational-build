export const filterStories = (stories: Story[]): Story[] =>
    stories.filter(
        (story) =>
            story.tags.includes("visual:check") && story.type === ("story")
    );
export function getStoryUrl(storybookUrl: string, id: string): string {
    const params = new URLSearchParams({
        id,
        viewMode: 'story',
        nav: '0',
    });

    return `${storybookUrl}/iframe.html?${params.toString()}`;
}
export async function navigate(
    page: Page,
    storybookUrl: string,
    id: string,
  ): Promise<void> {
    try {
      const url = getStoryUrl(storybookUrl, id);
      console.log(url);
      await page.goto(url);
      await page.waitForLoadState('networkidle');
      await page.waitForSelector('#storybook-root');
    } catch (error) {
      // Handle error here in cases where the above times out due to 404's and other factors.
    }
  }
  