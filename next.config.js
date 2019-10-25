const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  /*
  By default next.js will use the /pages directory for creating routes for uor app. However we are going to disable that
  since we will be hanlding dynamic routes with our server.js file
  */
  useFileSystemPublicRoutes: false,
  /*
  The 'next/config' module gives your app access to the publicRuntimeConfig and serverRuntimeConfig stored in your next.config.js.
  Place any server-only runtime config under a 'serverRuntimeConfig' property.
  Anything accessible to both client and server-side code should be under 'publicRuntimeConfig'.
  Since we will be using the ENV process varible without our app to decided which type of styles to load
  we will need to make the ENV varibale accessible to the frontend. By default we can't just use process.env.VARIBALE_NAME with next.
  Below lets add the ENV variable to our app with the publicRuntimeConfig configuration object
  */
  publicRuntimeConfig: {
    ENV: process.env.ENV
  },
  /*
    We use the webpack key to apply custom webpack configurations to your next project
    The "phase" property is the current context in which the configuration is loaded, You can see
    all phases here https://github.com/zeit/next.js/tree/canary/packages/next/next-server/lib/constants.ts
    The second parameter in the webpack function is on object of values, we are going to use the 'dev' value
    which is a boolean the is set to true if we are running a dev build(npm run dev)
  */
  webpack: (phase, { dev }) => {
    // If we are not is the dev mode, lets compile the scss to a minimized css file
    if (!dev) {
      phase.module.rules.push({
        test: /\.scss$/,
        use: [
          // MiniCssExtractPlugin will extract our SCSS/CSS into separate files
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      })

      // Take the extract code and export it to /public/css/main.css
      phase.plugins.push(new MiniCssExtractPlugin('../../public/css/main.css'))
    } else {
      /*
        Since we are in a dev mode, lets just compile the scss and to css for the browser to read

        So firstly in our build phase you will see the "module" object.
        module options determine how the different types of modules
        within a project will be treated.

        Secondly you will see a "rules" array inside the module.
        Rules is an array of rules which are matched to requests when modules are created.
        These rules can modify how the module is created.
        They can apply loaders to the module, or modify the parser.
       */
      phase.module.rules.push({
        // "test" sets the type for a matching module(for example below is testing for modules that have .scss in them)
        test: /\.scss$/,
        // If the test matches then use the following loaders
        use: [
          {
            // A loader for webpack that allows importing files as a String
            loader: 'raw-loader'
          },
          {
            // Loads a Sass/SCSS file and compiles it to CSS.
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      })
    }

    // After we are finished making our configurations we can return our updated webpack configuration to next
    return phase
  }
}
