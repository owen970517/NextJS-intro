//const API_KEY =process.env.API_KEY;
const API_KEY ="0e950df7b3ae87cab30e5769fe005eeb";

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source : "/contact",
        destination : "/form",
        permanent : false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source:"/api/movies",
        destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source : "/api/movies/:id",
        destination : `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      },
    ];
  },
};
