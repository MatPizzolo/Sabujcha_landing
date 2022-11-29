/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
*/

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vc5yqac5xuzq`,
        accessToken: 'wUzhs7R5I-nN25E3OhWoxNd5tPXbCGc7MuuHzBm-tF8',
      },
    },    
  ],
}
