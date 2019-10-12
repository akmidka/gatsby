import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "./article"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  
  <Layout>
    <SEO title="All posts"/>
    <StaticQuery
      query={graphql`
      {
        allContentfulBlog(sort: {order: DESC, fields: createdAt}) {
          edges {
            node {
              title
              subtitle
              slug
              text {
                childContentfulRichText {
                  html
                }
              }
            }
          }
        }
      }
      `}
      render={({
        allContentfulBlog: {
          edges
        }
      }) => (
        edges.map(({ node }) => (
          <Article content={node}/>          
        ))
      )}
    />
    
  </Layout>
)

export default IndexPage
