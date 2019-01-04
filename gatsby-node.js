const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulPost(limit: 1000) {
              edges {
                node {
                  title
                  slug
                  excerpt {
                    excerpt
                  }
                }
              }
            }
          }
        `
      )
        .then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          // Create blog posts pages.
          const blogPost = path.resolve('./src/templates/blog-post.js')
          const posts = result.data.allContentfulPost.edges

          _.each(posts, (post, index) => {
            const previous =
              index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node

            createPage({
              path: `/posts/${post.node.slug}`,
              component: blogPost,
              context: {
                id: post.node.slug,
                previous,
                next,
              },
            })
          })
        })
        .then(() => {
          graphql(
            `
              {
                allContentfulCategory(limit: 1000) {
                  edges {
                    node {
                      name
                      slug
                    }
                  }
                }
              }
            `
          ).then(result => {
            if (result.errors) {
              throw result.errors
            }

            // Create Category pages
            const categoryTemplate = path.resolve(`./src/templates/category.js`)
            // We want to create a detailed page for each
            // category node. We'll just use the Contentful id for the slug.
            _.each(result.data.allContentfulCategory.edges, edge => {
              // Gatsby uses Redux to manage its internal state.
              // Plugins and sites can use functions like "createPage"
              // to interact with Gatsby.
              createPage({
                // Each page is required to have a `path` as well
                // as a template component. The `context` is
                // optional but is often necessary so the template
                // can query data specific to each page.
                path: `/categories/${edge.node.slug}/`,
                component: categoryTemplate,
                context: {
                  id: edge.node.slug,
                },
              })
            })
          })
        })
    )
  })
}
