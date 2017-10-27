module.exports = {
  siteMetadata: {
    title: 'Kristin Lee Photography',
    author: 'Kristin Lee'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/gallery/`,
        destination: '/'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          'gatsby-remark-prismjs',
          // 'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/gallery`,
        name: 'gallery'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: 'ADD YOUR TRACKING ID HERE',
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet'
  ]
}
