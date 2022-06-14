export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'white', value: 'white' },
      { name: 'dark', value: 'rgba(26, 25, 31, 1)' },
    ]
  }
}