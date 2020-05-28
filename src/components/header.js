import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Avatar from "./avatar"

const Header = ({ siteTitle, siteAuthor }) => (
  <header
    style={{
      background: `#00387e`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem 0.6rem`,
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.6em" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            maxHeight: `5rem`
          }}
        >
          <div style={{ display: "flex", alignItems: `center`}}>
          <div style={{
            minWidth: `3rem`,
            height: `100`,
            // float: "left",
            margin: `0.4rem`}}>
            <Avatar />
          </div>
            <span style={{verticalAlign: "middle"}}>{siteTitle} <span style={{fontFamily: "monospace"}}>{(siteAuthor)}</span></span>
          </div>

        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteAuthor: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteAuthor: ``,
}

export default Header
