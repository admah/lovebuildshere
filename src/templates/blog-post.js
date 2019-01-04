import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { title, body } = post
    const { previous, next } = this.props.pageContext

    console.log(this.props)
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: '' }]}
          title={`${title} | ${siteTitle}`}
        />
        <h1>{title}</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: body.childContentfulRichText.html,
          }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'spacebetween',
            listStyle: 'none',
            padding: 0,
            marginLeft: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/posts/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li style={{ flexGrow: 2, textAlign: 'right' }}>
            {next && (
              <Link to={`/posts/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPost(slug: { eq: $id }) {
      title
      body {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
