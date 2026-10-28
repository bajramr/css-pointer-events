# CSS pointer-events: none — Beginner Demo

A small learning project by Bajram Ramadan comparing a normal button, a button with pointer-events: none, and a native disabled button.

![CSS pointer events none compared with a disabled button](https://bajram.dev/wp-content/uploads/2026/10/css-pointer-events-none-vs-disabled-bajram-ramadan.webp)

## Run

Extract the ZIP and open index.html. No installation, framework or build step is needed. The three runtime files are index.html, style.css and script.js.

## Publish in Playground

Upload all three runtime files into the same folder, for example /playground-lab/css-pointer-events/. Enter the actual index/folder URL in the Playground Builder's Demo URL field. Attach the ZIP in its download field. The WordPress theme's viewer supplies the common header, so this project intentionally has no header or back link.

## What to try

1. Click the normal button. Its message appears in Last action.
2. Click the second button. The pointer targets the card behind it instead; the button's message does not change. The card has no action handler.
3. Click a blank area of the demo, then use Tab to focus the normal button. Press Enter or Space.
4. Use Tab again to focus the pointer-events button. Press Enter or Space; its message updates.
5. The disabled button is skipped during ordinary Tab navigation and cannot be activated normally.

In an iframe, the theme header's links are also part of the surrounding page's Tab sequence. Browser/system settings can affect which elements are reached by Tab; on some macOS configurations you may need to enable keyboard navigation or use Option+Tab.

## Understand the code

- HTML gives each button an ID and the third button a disabled attribute.
- CSS adds pointer-events: none only to the second button. It deliberately looks enabled.
- JavaScript attaches two simple click listeners that replace a paragraph's textContent.
- Native button behaviour provides keyboard activation; no keydown code is needed.
- role="status" makes message changes available to assistive technology without moving focus.

pointer-events: none is not a substitute for disabled, access control or event cancellation. This demo has no interactive child inside the pointer-events button. Descendants with different pointer-events values can make more complex examples behave differently.

## Reference

https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/pointer-events

## Validation

JavaScript syntax and the two message handlers were checked. HTML button attributes and stylesheet links were checked. A real-browser visual and keyboard test was not available in the creation environment; use the manual checks above on the published demo.

## License

MIT; see LICENSE.
