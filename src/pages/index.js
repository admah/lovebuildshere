import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allContentfulPost.edges')

    console.log(this.props)

    return (
      <React.Fragment>
        <div
          style={{
            width: '100%',
            height: '5px',
            backgroundColor: '#1ca086',
            opacity: '0.7',
          }}
        />
        <Layout location={this.props.location}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={siteTitle}
          />
          {posts.map(({ node }, index) => {
            const title = get(node, 'title')
            const excerpt = get(node, 'excerpt.excerpt')
            return (
              <div key={index}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: 'none' }}
                    to={`/posts/${node.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <p dangerouslySetInnerHTML={{ __html: excerpt }} />
              </div>
            )
          })}
        </Layout>
      </React.Fragment>
    )
  }
}

BlogIndex.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          slug
          excerpt {
            excerpt
          }
          body {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`
