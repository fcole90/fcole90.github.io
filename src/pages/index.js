import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, this is my new website. Still work in progress...</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage