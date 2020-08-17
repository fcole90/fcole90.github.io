import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"
import pageStyle from "../components/layout.css"

export default function Index({data}) {
  return (
    <Layout mainClassName={pageStyle.cardsContainer}>
      <SEO title="Home"/>
      {/*<div>*/}
      {/*  <h1>*/}
      {/*    Amazing Pandas Eating Things*/}
      {/*  </h1>*/}
      {/*  <h4>{data.allMarkdownRemark.totalCount} Posts</h4>*/}
      {/*  {data.allMarkdownRemark.edges.map(({ node }) => (*/}
      {/*    <div key={node.id}>*/}
      {/*      <Link*/}
      {/*        to={node.fields.slug}*/}
      {/*        style={{*/}
      {/*          textDecoration: `none`,*/}
      {/*          color: `inherit`*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        <h3>*/}
      {/*          {node.frontmatter.title}{" "}*/}
      {/*          <span>*/}
      {/*            — {node.frontmatter.date}*/}
      {/*          </span>*/}
      {/*        </h3>*/}
      {/*        <p>{node.excerpt}</p>*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <h1>Posts by Fabio Colella</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        node.frontmatter.published === true &&
          <Link to={node.fields.slug}
                style={{
                textDecoration: `none`,
                color: `inherit`
              }}>
            <PostCard
              key = {node.id}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          </Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            published
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
