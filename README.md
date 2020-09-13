# Tailwind CSS Custom Properties + Text Opacity Demo

This is a quick demo showing how you can use Tailwind's `text-opacity` (and similar) utilities when using your own CSS variables to define your colors.

The big secret is defining your colors in _just_ their RGB (or HSL if you prefer) _components_, and not as a full color string, like this:

```css
:root {
  --color-primary: 37, 99, 235;
  --color-secondary: 253, 224, 71;
}
```

Then in your config file, define the colors using callbacks, taking this general form:

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      primary: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgba(var(--color-primary), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `rgba(var(--color-primary), var(${opacityVariable}, 1))`
        }
        return `rgb(var(--color-primary))`
      },
    },
  },
  // ...
}
```

This way the plugins (like text color, gradients, etc.) that need to inject some opacity data into the color can do so, while still giving you a valid RGB color string at the end of the day.

The `opacityValue` argument should be respected first if it exists (the gradient plugin uses this for Safari compatibility when fading to transparent), and the `opacityVariable` argument should be respected next if `opacityValue` is undefined. If neither are passed in, just don't set any opacity at all.