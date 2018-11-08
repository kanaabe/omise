import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import { Header } from "./header"
import styled from "styled-components"

const App = () => (
  <div>
    <Header />
    <Content>Coming soon.</Content>
  </div>
)

const Content = styled.div``

console.log("here.")
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App name="React" />, document.getElementById("react"))
})
