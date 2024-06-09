# Storybook tabs scroll sync

---

# :warning: There are other extension that do the same, for example https://chromewebstore.google.com/detail/synchronize-tab-scrolling/phceoocamipnafpgnchbfhkdlbleeafc?hl=en

---

This Chrome extension solves the problem of scroll position synchronization between the Storybook tabs.

## The problem

The typical use case is when you are modifying a component locally __in one tab__ and you want to visually compare it with the same component __in another tab__ that is rendered from the main branch.

- Development local branch tab is opened at `<Button/>` component in https://localhost:4000/?path=/story/components-button--button
- Main branch tab is opened at `<Button/>` component in https://your-production-storybook-instance.com/?path=/story/components-button--button

__The problem__ is that typically engineers have to meticulously scroll both tabs to the same position to compare the components. This is a tedious and error-prone process. The Storybook tabs scroll sync solves this problem by syncing the scroll position between the tabs.

## How to install

1. Check out this repo
2. Follow https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome to install the extension in Chrome, use this folder as a root of unpacked extension
