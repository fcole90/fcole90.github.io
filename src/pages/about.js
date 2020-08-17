import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <p>My text</p>
    </Layout>
  )
}

AboutPage.propTypes = {}

AboutPage.defaultProps = {}

export default AboutPage