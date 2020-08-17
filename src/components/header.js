import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import AvatarPic from "./avatar"
import moduleStyle from "./header.module.css"

const ListLink = (props) => (
  <li className={moduleStyle.link_list_li}>
    <Link to={props.to} className={moduleStyle.header_link}>
      <h2 className={moduleStyle.header_link_text}>{props.children}</h2>
    </Link>
  </li>
)

const Header = () => (
  <header className={moduleStyle.header}>
    <nav className={moduleStyle.navbar}>
    <ul className={moduleStyle.link_list}>

      <li className={[
        moduleStyle.link_list_li,
        moduleStyle.link_list_li_home
      ].join(" ")
      }>
        <Link className={moduleStyle.header_link} to={`/`}>
          <h2 className={moduleStyle.header_link_text} style={{whiteSpace: "nowrap"}}>
            {"fcole90"}
          </h2>
        </Link>
      </li>
      <ListLink to={'/about'}>About</ListLink>
    </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteAuthor: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  siteAuthor: ``
}

export default Header
