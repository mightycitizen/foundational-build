import { test, expect } from "@playwright/test";
import { filterStories, navigate } from "../utils";
import manifest from "../storybook-static/index.json";

const options = {
  fullPage: true,
  animations: "disabled",
  reducedMotion: 'reduce'
};

// test.beforeEach(async ({ page }, meta) => {
//   /**
//    * Set the viewport size and other global level browser settings here.
//    * For example you may want to block certain resources, etc.
//    */
//   await page.setViewportSize({ width: 1920, height: 1080 });

// //   console.log(process.env.UPSTREAM_STORYBOOK_URL);
//   await navigate(page, process.env.UPSTREAM_STORYBOOK_URL, meta.title);
//   await page.screenshot({
//     path: `playwright/visual.spec.ts-snapshots/${meta.title}-upstream-${process.platform}.png`,
//     options
//   });
// });

// console.log(manifest.entries);

const visualStories = filterStories(Object.values(manifest.entries));

visualStories.forEach((story) => {
  test(story.id, async ({ page }, meta) => {
    // console.log(process.env.STORYBOOK_URL);
    // await page.emulateMedia({ reducedMotion: 'reduce' });
    await navigate(page, process.env.STORYBOOK_URL, meta.title);
    
    const upstreamScreenshot = `${meta.title}-upstream-${process.platform}.png`;

    

    const screenshot = await page.screenshot({
      path: `playwright/${meta.title}-current-${process.platform}.png`,
      ...options
    });

    expect(screenshot).toMatchSnapshot(upstreamScreenshot);
  });
});

