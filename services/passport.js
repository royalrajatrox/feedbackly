const passport = require("passport");
const {Strategy: GoogleStrategy} = require("passport-google-oauth20");
const mongoose = require('mongoose');
const keys = require("../config/keys");
const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    },
        (accessToken, refreshToken, profile, done) => {
            // done is called when authentication is done
        User.findOne({googleId: profile.id})
            .then( (exisitingUser) => {
                if (exisitingUser){
                    // we already have a record of the user
                    done(null, exisitingUser);
                }else{
                    // that means we dont have the user
                    new User({ googleId: profile.id }).
                        save().
                        then(user => done(null, user));

                }
            })


    }
    )
);