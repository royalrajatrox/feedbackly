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


    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });


    app.get('/api/current_user', (req, res) => {
        //req = incoming request, res = outgoing response
        res.send(req.user);
    });

};