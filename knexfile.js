module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/react-redux-mockout-api'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
