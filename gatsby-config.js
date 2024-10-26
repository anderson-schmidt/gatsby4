/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: ["https://jsonplaceholder.typicode.com/users"]
      }
    }
  ],
};
