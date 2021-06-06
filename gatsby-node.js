//  tap into Gatsby's server-side build pipeline and customize it with this file

// example of creating pages from templates
exports.createPages = ( { actions: { createPage }}) => {
  
  // static page, no data
  createPage({
    path: '/no-data/',
    component: require.resolve("./src/templates/no-data"),
  })

  // data provided here by using context
  createPage({
    path: '/data-from-context/',
    component: require.resolve("./src/templates/data-from-context"),
    context: {
      title: 'Super Sick Title',
      content: "<p>This is the page content</p>"
    }
  })

  // data provided from json
  const listings = require('./data/listings.json')
  listings.forEach(listing =>{
    createPage({
      path: `/listing/${listing.id}/`,
      component: require.resolve('./src/templates/listing.js'),
      context: {
        title: listing.title,
        company: listing.company,
        salary: listing.salary,
        location: listing.location,
        time: listing.time,
        id: listing.id,
      }
    })
  })
}

// Override the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/account/)) {
      page.matchPath = "/account/*"
  
      // Update the page.
      createPage(page)
    }
  }



  // for Auth0
  exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      /*
       * During the build step, `auth0-js` will break because it relies on
       * browser-specific APIs. Fortunately, we don’t need it during the build.
       * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
       * during the build. (See `src/utils/auth.js` to see how we prevent this
       * from breaking the app.)
       */
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /auth0-js/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }