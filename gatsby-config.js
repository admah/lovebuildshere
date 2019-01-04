require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
}),
  (module.exports = {
    siteMetadata: {
      title: 'Love Builds Here',
      author: 'Adam and Karen Murray',
      description:
        'Helpful parenting tips, house projects, and anything else along the way that helps us grow to love more.',
      siteUrl: 'https://www.lovebuildshere.com/',
    },
    plugins: [
      /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },*/
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `apxy29urc1j1`,
          accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            'gatsby-remark-prismjs',
            'gatsby-remark-copy-linked-files',
            'gatsby-remark-smartypants',
          ],
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: `UA-50789762-6`,
        },
      },
      `gatsby-plugin-feed`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Gatsby Starter Blog`,
          short_name: `GatsbyJS`,
          start_url: `/`,
          background_color: `#ffffff`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/assets/gatsby-icon.png`,
        },
      },
      `gatsby-plugin-offline`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: 'gatsby-plugin-typography',
        options: {
          pathToConfigModule: 'src/utils/typography',
        },
      },
      `@contentful/gatsby-transformer-contentful-richtext`,
    ],
  })
