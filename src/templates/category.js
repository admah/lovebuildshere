import React from 'react'
import { Link, graphql } from 'gatsby'
import * as PropTypes from 'prop-types'
import Layout from '../components/Layout'

import { rhythm } from '../utils/typography'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.data.contentfulCategory
    const { name, post } = category

    console.log(this.props)

    return (
      <Layout location={this.props.location}>
        <h1>{name}</h1>

        {post &&
          post.map((p, i) => (
            <li key={i}>
              <Link to={`/post/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
      </Layout>
    )
  }
}

CategoryTemplate.propTypes = propTypes

export default CategoryTemplate

export const pageQuery = graphql`
  query($id: String!) {
    contentfulCategory(slug: { eq: $id }) {
      name
      post {
        title
        slug
      }
    }
  }
`
