module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  FACEBOOK_APP_ID:process.env.FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET:process.env.FACEBOOK_APP_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  port: process.env.PORT || 5000

  // stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  // sendGridKey: process.env.SEND_GRID_KEY,
  // redirectDomain: process.env.REDIRECT_DOMAIN
};
