/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ props, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title, author
        }
      }
    }
  `)

  return (
    <>
    <div className={"layout_container"}>
        <Header siteTitle={data.site.siteMetadata.title} siteAuthor={data.site.siteMetadata.author}/>
        <main className={props ? (props.mainClassName ? props.mainClassName : "") : ""}>
          <div className={"content_container"}>
            {children}
          </div>
        </main>
        <Footer/>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
