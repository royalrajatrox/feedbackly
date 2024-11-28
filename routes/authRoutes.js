const passport = require("passport");

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
// There could be many scopes, for ex. contact info... this means getting the information of the client from the google
    app.get('/auth/google/callback', passport.authenticate('google'));

};