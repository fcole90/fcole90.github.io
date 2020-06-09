import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FlexItem = ({ children }) => (
  <div style={{
    border: `1px #ccc solid`,
    padding: 10,
  }}>{ children }</div>
)

const TestPage = () => (
    <div className={`container-1`} style={{
      display: `flex`
    }}>
      <div className={`box1`} style={{
        flex: 2
      }}>
        <h1>Box 1</h1>
        <p>Lorem ipsum sit dolor amet</p>
      </div>
      <div className={`box2`}  style={{
        flex: 1
      }}>
        <h1>Box 1</h1>
        <p>Lorem ipsum sit dolor amet</p>
      </div>
      <div className={`box`}  style={{
        flex: 1
      }}>
        <h1>Box 1</h1>
        <p>Lorem ipsum sit dolor amet</p>
      </div>
    </div>
)

export default TestPage
