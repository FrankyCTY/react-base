import React from 'react'
import PropTypes from 'prop-types'
import { styled, s } from 'lib/styled'
import { Link } from 'react-router-dom'

const { object } = PropTypes

const Container = styled.div(s('flex flex-column h-full shadow-md bg-white z-1'), {
  minWidth: 200,
})

const ImageContainer = styled(Link)(
  s('w-full mt-8 mb-12 no-decoration flex justify-center self-center')
)

const NavigationDrawer = ({ homeRoute, children, ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <ImageContainer to={homeRoute}>Logo</ImageContainer>
      Hello World
    </Container>
  )
}

NavigationDrawer.propTypes = {
  otherProps: object,
}

export { NavigationDrawer }
