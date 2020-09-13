module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
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
      secondary: ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgba(var(--color-secondary), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `rgba(var(--color-secondary), var(${opacityVariable}, 1))`
        }
        return `rgb(var(--color-secondary))`
      },
    },
  },
  variants: {},
  plugins: [],
}
