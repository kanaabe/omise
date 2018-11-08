import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Logo } from "./shared/logo"
import { Cart } from "./cart"

export const Header = props => (
  <StyledHeader>
    <input type="text" placeholder="Search..." />
    <Logo />
    <Cart />
  </StyledHeader>
)

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

Header.defaultProps = {
  name: "David"
}

Header.propTypes = {
  name: PropTypes.string
}
