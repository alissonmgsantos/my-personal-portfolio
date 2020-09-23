import React from "react"
import PropTypes from "prop-types"
import { Navigation } from "../Navigation"

const Header = ({ author }) => (
  <header
    style={{
      background: `rebeccapurple`,
      display: "flex",
      flexDirection: "row",
      height: 64,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "970px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          display: "flex",
          flexGrow: 1,
          color: `white`,
          textTransform: "uppercase",
        }}
      >
        {author}
      </h1>
      <Navigation />
    </div>
  </header>
)

Header.propTypes = {
  author: PropTypes.string,
}

Header.defaultProps = {
  author: ``,
}

export default Header
