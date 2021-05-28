import { down, up, between as betweenBase, only as onlyBase } from 'styled-breakpoints'

function createStyles(deriveMediaQuery, ...args) {
  return (...styles) =>
    (props) => ({
      [deriveMediaQuery(...args)(props)]: styles.reduce((acc, style = {}) => {
        return {
          ...acc,
          ...style,
        }
      }, {}),
    })
}

function smaller(breakpoint) {
  return createStyles(down, breakpoint)
}

function larger(breakpoint) {
  return createStyles(up, breakpoint)
}

function between(lower, upper) {
  return createStyles(betweenBase, lower, upper)
}

function only(breakpoint) {
  return createStyles(onlyBase, breakpoint)
}

export { smaller, larger, between, only }
