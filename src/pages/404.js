import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Sorry, page not found.</h1>
    <p>This page doesn't exist. Are you sure you typed it correctly?</p>
  </Layout>
)

export default NotFoundPage
