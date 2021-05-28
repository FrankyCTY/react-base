// The breakpoint utilities must be imported AFTER these breakpoints have been loaded
// by Emotion's theming system, as they use the theme to generate the list of valid
// breakpoints.
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export { breakpoints }
export * from '@emotion/react'
export * from './breakpoints'
export * from './headwind'
export * from './styled'
