import React from "react"
import PropTypes from "prop-types"

import moduleStyle from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={moduleStyle.footer}>
      <div className={moduleStyle.footerContent}>
        © {new Date().getFullYear()} Fabio Colella, Licensed under MIT License.
      </div>
    </footer>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer