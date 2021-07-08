module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },

  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],

  router: {
    middleware: ["clearValidationErrors"]
  },

  plugins: [
    "./plugins/mixins/user.js",
    "./plugins/axios.js",
    "./plugins/mixins/validation.js"
  ],

  axios: {
    baseURL: "http://localhost:8000/api"
  },

  auth: {
    redirect: {
      login: "/auth/signin",
      home: "/"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/login",
            method: "post",
            propertyName: "meta.token"
          },
          user: {
            url: "/me",
            method: "get",
            propertyName: "data"
          },
          logout: {
            url: "/logout",
            method: "post"
          }
        }
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
